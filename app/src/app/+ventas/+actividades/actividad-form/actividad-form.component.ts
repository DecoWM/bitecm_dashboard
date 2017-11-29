import { PredefinidasService } from './../../shared/predefinidas.service';
import { ActividadesService } from './../../shared/actividades.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ItinerariosService } from '../../shared/itinerarios.service';
import { multilanguageUtils as multilanguages } from './../../shared/multilanguages.utils';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-actividad-form',
  templateUrl: './actividad-form.component.html',
  styles: []
})
export class ActividadFormComponent implements OnInit {
  mode: string;
  selectedLang = 'es';
  itinerario: any = { participantes: [], langCode: this.selectedLang };
  actividad: any;
  langCodes: Array<any> = [{code: 'es', label: 'Español'}, {code: 'en', label: 'Inglés'}];

  hora_inicio = '';
  hora_fin = '';
  fecha = '';
  actividadPredefinida = null;

  timerOptions = {
    showInputs: true,
    minuteStep: 5,
    explicitMode: true
  }

  validationOptions = {
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      titulo: {
        validators: {
          notEmpty: {
            message: 'Titulo en cada idioma requerido'
          }
        }
      }
    }
  };
  participantesCheck: boolean[] = [];
  selectedLangLabel: string;
  predefinidas: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private itinerariosService: ItinerariosService,
    private actividadesService: ActividadesService,
    private predefinidasService: PredefinidasService
  ) {
    this.mode = this.route.snapshot.params.id ? 'Editar' : 'Crear';
    this.actividad = {};
    this.actividad['participantes'] = [];
    this.langCodes.map((lang) => this.actividad[lang.code] = {});
    this.actividad['hora_inicio'] = '0000';
    this.actividad['hora_fin'] = '0000';
    this.fecha = this.itinerariosService.fromISOToSimpleDate((new Date()).toISOString());
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.hasOwnProperty('itinerario_id')) {
        Observable.zip(
          this.itinerariosService.getItinerario(params['itinerario_id']),
          this.predefinidasService.getPredefinidas()
        ).subscribe(([data_itinerario, data_predefinidas]: [any, any]) => {
          this.itinerario = data_itinerario.result;
          this.itinerario.participantes.map((e, i) => this.participantesCheck.push(false));
          // Establecer el idioma seleccionado en el itinerario para traer los datos de la actividad predeterminada
          this.selectedLang = this.itinerario.langCode;
          this.selectedLangLabel = this.langCodes.filter((lang) => lang.code === this.selectedLang)[0]['label'];

          this.predefinidas = data_predefinidas.result
            .filter((predef) => predef.langCodes.indexOf(this.selectedLang) !== -1)
            .map((predef) => {
              const langIndexPosc = predef.langCodes.indexOf(this.selectedLang);
              const newPredefs = {};
              newPredefs['_id'] = predef['_id'];
              newPredefs['label'] = predef.titulo[langIndexPosc];
              newPredefs['hora_inicio'] = predef.hora_inicio;
              newPredefs['hora_fin'] = predef.hora_fin;

              newPredefs[this.selectedLang] = {
                titulo: predef.titulo[langIndexPosc],
                lugar: predef.lugar[langIndexPosc],
                desc: predef.desc[langIndexPosc]
              };
              return newPredefs;
            });
        });
      }
      this.render(params.hasOwnProperty('id') ? params['id'] : false);
    });
  }

  onValidationSuccess(e) {
    if (e.type === 'success') {
      this.save(this.actividad);
    }
  }

  onSelectChange(event) {
    const data = event.params.data;
    const inputName = event.currentTarget.name;
    const predefinida = data.id.split(': ')[0];

    this.actividad[this.selectedLang] = this.predefinidas[predefinida][this.selectedLang];
    this.actividad['hora_inicio'] = this.predefinidas[predefinida]['hora_inicio'];
    this.actividad['hora_fin'] = this.predefinidas[predefinida]['hora_fin'];

    this.hora_inicio = this.itinerariosService.formatTime(this.actividad['hora_inicio']);
    this.hora_fin = this.itinerariosService.formatTime(this.actividad['hora_fin']);
  }

  render(id = false) {
    if (id) {
      this.actividadesService.getActividad(id)
        .subscribe((data: any) => {
          if (data.success) {
            /*const actividad = data.result;
            this.actividad = Object.assign(
              {},
              this.actividad, multilanguages.storeToMultilanguage(actividad, this.langCodes),
              // Reset el array de participantes por que la función de multilenguaje lo suprimió
              {'participantes': actividad['participantes']}
            );*/
            this.actividad = data.result;
            this.actividad.titulo = this.actividad.titulo[0];
            this.actividad.desc = this.actividad.desc[0];
            this.actividad.lugar = this.actividad.lugar[0];
            // this.actividad['itinerario'] = this.itinerario['_id'];
            this.hora_inicio = this.itinerariosService.formatTime(this.actividad['hora_inicio']);
            this.hora_fin = this.itinerariosService.formatTime(this.actividad['hora_fin']);
            this.fecha = this.itinerariosService.fromISOToSimpleDate(this.actividad.fecha);
            this.participantesCheck = this.participantesCheck.map((e, i) => !!this.actividad['participantes'][i]);
          }
        });
    } else {
      // this.actividad['itinerario'] = this.itinerario['_id'];
      this.actividad['hora_inicio'] = '0000';
      this.actividad['hora_fin'] = '0000';
      this.participantesCheck = this.participantesCheck.map((e, i) => false)
    }
  }

  save(actividad) {
    if (actividad) {
      const newActividad = actividad; // multilanguages.multiLanguageToStore(actividad, this.langCodes);
      this.participantesCheck.map((e, i) => (newActividad['participantes'][i] = e));
      newActividad.itinerario = this.itinerario._id; console.log(newActividad);
      if (!newActividad.hasOwnProperty('_id')) {
        this.actividadesService.createActividad(newActividad).subscribe((message) => {
          this.router.navigate(['itinerarios', 'mis-itinerarios', newActividad['itinerario'], 'actividades']);
        });
      } else {
        this.actividadesService.updateActividad(newActividad).subscribe((message) => {
          this.router.navigate(['itinerarios', 'mis-itinerarios', newActividad['itinerario'], 'actividades']);
        });
      }
    }
  }

  onDateChange(event) {
    this[event.currentTarget.name] = event.data;
    this.actividad[event.currentTarget.name] = this.itinerariosService.fromSimpleDateToISO(event.data);
  }

  onTimeChanges(e) {
    if (typeof e.currentTarget.name !== 'undefined' &&
       typeof this.actividad[e.currentTarget.name] !== 'undefined') {
      let hour = e.time.hours;
      if (e.time.meridian === 'AM' && hour === 12) {
        hour = 0;
      }
      if (e.time.meridian === 'PM' && hour < 12) {
        hour += 12;
      }

      this.actividad[e.currentTarget.name] = [
        hour,
        e.time.minutes > 9 ? e.time.minutes : '0' + e.time.minutes
      ].join('');
    }
  }

  setLang(lang) {
    this.selectedLang = lang;
  }

}
