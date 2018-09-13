import { Component, OnInit, Type, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { DistritosService } from './distritos.service';
import { NotificationService } from '../../shared/utils/notification.service';

import { BlockUIService } from 'ng-block-ui';

@Component({
  selector: 'distritos',
  templateUrl: './distritos.component.html',
  styles: []
})
export class DistritosComponent implements OnInit {
  loadingStatus: string;
  itemsObs: Subject<any> = new Subject();
  dtTrigger: Subject<any> = new Subject();
  alert: any = null;

  options = {
    dom: 'Bfrtip',
    pageLength: 25,
    columnDefs: [ {
      targets: [ 6 ],
      orderable: false
    } ],
    order: [[5, 'desc']],
    // colReorder: true
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private districtService: DistritosService,
    private notificationService: NotificationService
  ) {
    this.loadingStatus = 'Cargando contratos...';
  }

  ngOnInit() {
    this.alert = null;
    this.blockui.start('content');
    this.districtService.getDistricts()
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

  showPopupUnpublish(district): void {
    this.notificationService.smartMessageBox({
      title : `<i class="fa fa-sign-out txt-color-orangeDark"></i> Desasignar 
        <span class="txt-color-orangeDark">
          <strong>${district.branch_name} al distrito de ${district.district_name}</strong>
        </span>`,
      content : '¿Seguro que quieres desasignar esta sucursal?.',
      buttons : '[No][Si]'
    }, (ButtonPressed) => {
      if (ButtonPressed === 'Si') {
        this.unpublish(district);
      }
    });
  }

  unpublish(district: any): void {
    this.blockui.start('content');
    this.districtService.unpublishDistrict(district.district_id)
      .subscribe((res: any) => {
        if (res.success) {
          district.active = 0;
          district.branch_name = null;
          district.updated_at = res.result.updated_at;
          this.printAlert(this.getAlertUnpublish(res, district));
        }
        this.blockui.stop('content');
      });
  }

  getAlertUnpublish(result, district): any {
    let mode, title, message;
    if (result.success) {
      mode = 'success';
      title = 'Desasignación completada';
      message = 'La Sucursal ha sido desasignada del distrito ' + district.district_name;
    } else {
      mode = 'danger';
      title = 'Desasignación fallida';
      message = 'La Sucursal no pudo ser desasignada del distrito ' + district.district_name;
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
