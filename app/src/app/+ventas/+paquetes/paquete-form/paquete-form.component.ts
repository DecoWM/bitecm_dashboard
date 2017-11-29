import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PaquetesService } from '../../shared/paquetes.service';
import { multilanguageUtils as multilanguages } from '../../shared/multilanguages.utils';

@Component({
  selector: 'app-paquete-form',
  templateUrl: './paquete-form.component.html',
  styles: []
})
export class PaqueteFormComponent implements OnInit {
  mode: string;
  selectedLang = 'es';
  langCodes: Array<any> = [{code: 'es', label: 'Español'}, {code: 'en', label: 'Inglés'}];
  paquete = {};
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
    private paquetesService: PaquetesService
  ) {
    this.langCodes.map((lang) => this.paquete[lang.code] = {});
    this.mode = this.route.snapshot.params.id ? 'Editar' : 'Crear';
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.render(params.hasOwnProperty('id') ? params['id'] : false);
    });
  }

  onValidationSuccess(e) {
    if (e.type === 'success') {
      this.save(this.paquete);
    }
  }

  render(id = false) {
    if (id) {
      this.paquetesService.getPaquete(id).subscribe((data: any) => {
        if (data.success) {
          const paquete = data.result;
          this.paquete = multilanguages.storeToMultilanguage(paquete, this.langCodes);
        }
      });
    }
  }

  save(paquete) {
    if (paquete) {
      const newPaquete = multilanguages.multiLanguageToStore(paquete, this.langCodes);
      if (!newPaquete.hasOwnProperty('_id')) {
        this.paquetesService.createPaquete(newPaquete).subscribe((savedPaquete) => {
          this.router.navigate(['itinerarios', 'paquetes']);
        });
      } else {
        this.paquetesService.updatePaquete(newPaquete).subscribe((savedPaquete) => {
          this.router.navigate(['itinerarios', 'paquetes']);
        });
      }
    }
  }

  setLang(lang) {
    this.selectedLang = lang;
    // const bootstrapValidator = this.getFormValidator();
    // bootstrapValidator.validate();
  }

}
