import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ItinerariosService } from '../../shared/itinerarios.service';
import { SubAgenciasService } from '../../../+agencia/shared/subagencias.service';
import { ClientesService } from '../../../+usuarios/shared/clientes.service';
import { PaquetesService } from '../../shared/paquetes.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/observable/of';

declare var $: any;

@Component({
  selector: 'app-itinerario-form',
  templateUrl: './itinerario-form.component.html',
  styles: [`
    .participantes-list{ list-style: none; }
    .participantes-list li{ padding-bottom: 5px; }
  `]
})
export class ItinerarioFormComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  blockContent: Subject<any> = new Subject();

  langCodes: any[] = [{ code: 'es', label: 'Español' }, { code: 'en', label: 'Inglés' }];

  itinerario = { langCode: 'es', participantes: [] };
  participantes: any = [];
  paquetes: any[];
  clientes: any[];
  subagencias: any[];
  fecha_inicio: string;
  fecha_fin: string;
  mode: string;
  nombreCliente: any;
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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private itinerarioService: ItinerariosService,
    private paquetesService: PaquetesService,
    private usuariosService: ClientesService,
    private subAgenciasService: SubAgenciasService
  ) {
    this.fecha_inicio = this.itinerarioService.fromISOToSimpleDate((new Date()).toISOString());
    this.fecha_fin = this.itinerarioService.fromISOToSimpleDate((new Date()).toISOString());
    this.mode = this.route.snapshot.params.id ? 'Editar' : 'Crear';
  }

  ngOnInit() {
    this.blockUI.start();
    Observable.zip(
      this.paquetesService.getPaquetes(),
      this.usuariosService.getClientes(),
      this.subAgenciasService.getSubagencias(),
      this.route.params
    ).subscribe(([d_paquetes, d_clientes, d_subagencias, params]: [any, any, any, any]) => {
      this.paquetes = d_paquetes.result;
      this.clientes = d_clientes.result;
      this.subagencias = d_subagencias.result;
      this.render(params.hasOwnProperty('id') ? params['id'] : false);
    });
  }

  onSelectChange(event) {
    const data = event.params.data;
    const inputName = event.currentTarget.name;
    this.itinerario[inputName] = data.id;
  }

  onDateChange(event) {
    this[event.currentTarget.name] = event.data;
    this.itinerario[event.currentTarget.name] = this.itinerarioService.fromSimpleDateToISO(event.data);
  }

  onValidationSuccess(e) {
    if (e.type === 'success') {
      this.save(this.itinerario);
    }
  }

  render(id = false) {
    if (id) {
      this.itinerarioService.getItinerario(id)
        .subscribe((data: any) => {
          if (data.success) {
            const itinerario = data.result;
            this.itinerario = itinerario;
            if (itinerario.cliente) {
              this.nombreCliente = itinerario.cliente.nombre;
            }
            this.fecha_inicio = this.itinerarioService.fromISOToSimpleDate(itinerario.fecha_inicio);
            this.fecha_fin = this.itinerarioService.fromISOToSimpleDate(itinerario.fecha_fin);
            this.participantes = this.itinerario['participantes'].map((e, i) => i);
          }
          this.blockUI.stop();
          this.blockContent.next(true);
        });
    } else {
      /* this.itinerario['pin'] = this.itinerarioService.generateUID(); */
      this.blockUI.stop();
      this.blockContent.next(true);
    }
  }

  addParticipante(nameObj, event = null) {
    if (event) {
      event.preventDefault();
    }
    if (Array.isArray(this.itinerario.participantes)) {
      this.itinerario.participantes.push(nameObj.value);
      this.participantes.push(this.itinerario.participantes.length);
      nameObj.value = '';
    }
  }

  removeParticipante(index) {
    if (Array.isArray(this.itinerario['participantes']) && this.itinerario['participantes'].length > 0) {
      this.itinerario['participantes'].splice(index, 1);
      this.participantes.splice(index, 1);
    }
  }

  save(itinerario) {
    if (itinerario) {
      const newItinerario = { ...itinerario };
      newItinerario.voucher = newItinerario.voucher.toUpperCase();
      newItinerario['pin'] = this.itinerarioService.generateUID();
      newItinerario['fecha_inicio'] = this.itinerarioService.fromSimpleDateToISO(this.fecha_inicio);
      /* newItinerario['fecha_fin'] = this.itinerarioService.fromSimpleDateToISO(this.fecha_fin); */
      console.log(newItinerario);
      if (!newItinerario.hasOwnProperty('_id')) {
        this.itinerarioService.createItinerario(newItinerario).subscribe((message) => {
          this.router.navigate(['itinerarios', 'mis-itinerarios']);
        });
      } else {
        this.itinerarioService.updateItinerario(newItinerario).subscribe((message) => {
          this.router.navigate(['itinerarios', 'mis-itinerarios']);
        });
      }
    }
  }
}
