import { Component, OnInit, Type, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MarcasService } from './marcas.service';
import { NotificationService } from '../../shared/utils/notification.service';

import { BlockUIService } from 'ng-block-ui';

@Component({
  selector: 'marcas',
  templateUrl: './marcas.component.html',
  styles: []
})
export class MarcasComponent implements OnInit {
  loadingStatus: string;
  itemsObs: Subject<any> = new Subject();
  dtTrigger: Subject<any> = new Subject();
  alert: any = null;

  options = {
    dom: 'Bfrtip',
    pageLength: 25,
    columnDefs: [ {
      targets: [ 4 ],
      orderable: false
    } ],
    order: [[2, 'asc']],
    // colReorder: true
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private brandService: MarcasService,
    private notificationService: NotificationService
  ) {
    this.loadingStatus = 'Cargando marcas...';
  }

  ngOnInit() {
    this.alert = null;
    this.blockui.start('content');
    this.brandService.getBrands()
      .subscribe((data: any) => {
        console.log(data);
        this.blockui.stop('content');
        const items = data.result;
        this.itemsObs.next(items);
        if (items.length === 0) {
          this.loadingStatus = 'No se encontraron registros';
        }
      }, (error) => {
        this.blockui.stop('content');
        if (error.status === 401) {
        // this.authService.logout(true);
        }
      });
  }

  detail(brand: any): void {
    this.router.navigate([brand.brand_id], {relativeTo: this.route});
  }

  showPopupPublish(brand): void {
    this.notificationService.smartMessageBox({
      title : `<i class="fa fa-sign-out txt-color-orangeDark"></i> Publicar 
        <span class="txt-color-orangeDark">
          <strong>${brand.brand_name} </strong>
        </span>`,
      content : '¿Seguro que quieres publicar esta marca?.',
      buttons : '[No][Si]'
    }, (ButtonPressed) => {
      if (ButtonPressed === 'Si') {
        this.publish(brand);
      }
    });
  }

  showPopupUnpublish(brand): void {
    this.notificationService.smartMessageBox({
      title : `<i class="fa fa-sign-out txt-color-orangeDark"></i> Despublicar 
        <span class="txt-color-orangeDark">
          <strong>${brand.brand_name} </strong>
        </span>`,
      content : '¿Seguro que quieres despublicar esta marca?.',
      buttons : '[No][Si]'
    }, (ButtonPressed) => {
      if (ButtonPressed === 'Si') {
        this.unpublish(brand);
      }
    });
  }

  publish(brand: any): void {
    this.blockui.start('content');
    this.brandService.publishBrand(brand.brand_id)
      .subscribe((res: any) => {
        if (res.success) {
          brand.active = 1;
          brand.updated_at = res.result.updated_at;
          this.printAlert(this.getAlertPublish(res, brand));
        }
        this.blockui.stop('content');
      });
  }

  unpublish(brand: any): void {
    this.blockui.start('content');
    this.brandService.unpublishBrand(brand.brand_id)
      .subscribe((res: any) => {
        if (res.success) {
          brand.active = 0;
          brand.updated_at = res.result.updated_at;
          this.printAlert(this.getAlertUnpublish(res, brand));
        }
        this.blockui.stop('content');
      });
  }

  getAlertPublish(result, brand): any {
    let mode, title, message;
    if (result.success) {
      mode = 'success';
      title = 'Publicación completada';
      message = 'La Marca ' + brand.brand_name + ' ha sido publicada';
    } else {
      mode = 'danger';
      title = 'Publicación fallida';
      message = 'La Marca ' + brand.brand_name + ' no pudo ser publicada';
    }
    return {
      'title': title,
      'message': message,
      'mode': mode
    }
  }

  getAlertUnpublish(result, brand): any {
    let mode, title, message;
    if (result.success) {
      mode = 'success';
      title = 'Despublicación completada';
      message = 'La Marca ' + brand.brand_name + ' ha sido despublicado';
    } else {
      mode = 'danger';
      title = 'Despublicación fallida';
      message = 'La Marca ' + brand.brand_name + ' no pudo ser despublicado';
    }
    return {
      'title': title,
      'message': message,
      'mode': mode
    }
  }

  printAlert(alert): void {
    if (alert && !(alert instanceof Array)) {
      alert = [alert];
    }
    this.alert = alert;
  }
}
