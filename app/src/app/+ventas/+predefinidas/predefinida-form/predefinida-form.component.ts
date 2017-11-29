import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ItinerariosService } from './../../shared/itinerarios.service';
import { PredefinidasService } from './../../shared/predefinidas.service';
import { multilanguageUtils as multilanguages } from '../../shared/multilanguages.utils';

@Component({
  selector: 'app-predefinida-form',
  templateUrl: './predefinida-form.component.html',
  styles: []
})
export class PredefinidaFormComponent implements OnInit {
  mode: string;
  selectedLang = 'es';
  langCodes: any[] = [{code: 'es', label: 'Español'}, {code: 'en', label: 'Inglés'}];
  predefinida = {};
  validationOptions = {
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      hora_inicio: {
        validators: {
          notEmpty: {
            message: 'Ingrese un horario (12:00 AM)'
          }
        }
      },
      hora_fin: {
        validators: {
          notEmpty: {
            message: 'Ingrese un horario (12:00 AM)'
          }
        }
      },
      titulo: {
        validators: {
          notEmpty: {
            message: 'Titulo en cada idioma requerido'
          }
        }
      },
      lugar: {
        validators: {
          notEmpty: {
            message: 'Lugar requerido'
          }
        }
      },
      desc: {
        validators: {
          notEmpty: {
            message: 'Descripción requerido'
          }
        }
      }
    }
  };

  hora_inicio = '';
  hora_fin = '';
  timerOptions = {
    showInputs: true,
    minuteStep: 5,
    explicitMode: true
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private itinerariosService: ItinerariosService,
    private predefinidaService: PredefinidasService
  ) {
    this.langCodes.map((lang) => this.predefinida[lang.code] = {});
    this.predefinida['hora_inicio'] = '0000';
    this.predefinida['hora_fin'] = '0000';
    this.mode = this.route.snapshot.params.id ? 'Editar' : 'Crear';
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.render(params.hasOwnProperty('id') ? params['id'] : false);
    });
  }

  onValidationSuccess(e) {
    if (e.type === 'success') {
      this.save(this.predefinida);
    }
  }

  render(id = false) {
    if (id) {
      this.predefinidaService.getPredefinida(id)
        .subscribe((data: any) => {
          const predefinida = data.result;
          this.predefinida = multilanguages.storeToMultilanguage(predefinida, this.langCodes);
          this.hora_inicio = this.itinerariosService.formatTime(this.predefinida['hora_inicio']);
          this.hora_fin = this.itinerariosService.formatTime(this.predefinida['hora_fin']);
        });
    }
  }

  save(predefinida) {
    if (predefinida) {
      const newPredefinida = multilanguages.multiLanguageToStore(predefinida, this.langCodes);
      if (!newPredefinida.hasOwnProperty('_id')) {
        this.predefinidaService.createPredefinida(newPredefinida)
          .subscribe((savedPredefinida) => {
            this.router.navigate(['itinerarios', 'predefinidas']);
          });
      } else {
        this.predefinidaService.updatePredefinida(newPredefinida)
          .subscribe((savedPredefinida) => {
            this.router.navigate(['itinerarios', 'predefinidas']);
          });
      }
    }
  }

  onTimeChanges(e) {
    if (typeof e.currentTarget.name !== 'undefined' &&
       typeof this.predefinida[e.currentTarget.name] !== 'undefined'
    ) {
      let hour = e.time.hours;
      if (e.time.meridian === 'AM' && hour === 12) {
        hour = 0;
      }
      if (e.time.meridian === 'PM' && hour < 12) {
        hour += 12;
      }

      this.predefinida[e.currentTarget.name] = [
        hour,
        e.time.minutes > 9 ? e.time.minutes : '0' + e.time.minutes
      ].join('');
    }
  }

  setLang(lang) {
    this.selectedLang = lang;
    // const bootstrapValidator = this.getFormValidator();
    // bootstrapValidator.validate();
  }
}
