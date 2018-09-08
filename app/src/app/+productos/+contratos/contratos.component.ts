import { Component, OnInit, Type, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ContratosService } from './contratos.service';
import { NotificationService } from '../../shared/utils/notification.service';

import { BlockUIService } from 'ng-block-ui';

@Component({
  selector: 'contratos',
  templateUrl: './contratos.component.html',
  styles: []
})
export class ContratosComponent implements OnInit {
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
    order: [[4, 'desc']],
    // colReorder: true
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private contractService: ContratosService,
    private notificationService: NotificationService
  ) {
    this.loadingStatus = 'Cargando contratos...';
  }

  ngOnInit() {
    this.alert = null;
    this.blockui.start('content');
    this.contractService.getContracts()
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

  detail(contract: any): void {
    this.router.navigate([contract.contract_id], {relativeTo: this.route});
  }

  showPopupPublish(contract): void {
    this.notificationService.smartMessageBox({
      title : `<i class="fa fa-sign-out txt-color-orangeDark"></i> Publicar 
        <span class="txt-color-orangeDark">
          <strong>${contract.contract_name} </strong>
        </span>`,
      content : '¿Seguro que quieres publicar este contrato?.',
      buttons : '[No][Si]'
    }, (ButtonPressed) => {
      if (ButtonPressed === 'Si') {
        this.publish(contract);
      }
    });
  }

  showPopupUnpublish(contract): void {
    this.notificationService.smartMessageBox({
      title : `<i class="fa fa-sign-out txt-color-orangeDark"></i> Despublicar 
        <span class="txt-color-orangeDark">
          <strong>${contract.contract_name} </strong>
        </span>`,
      content : '¿Seguro que quieres despublicar este contrato?.',
      buttons : '[No][Si]'
    }, (ButtonPressed) => {
      if (ButtonPressed === 'Si') {
        this.unpublish(contract);
      }
    });
  }

  publish(contract: any): void {
    this.blockui.start('content');
    this.contractService.publishContract(contract.contract_id)
      .subscribe((res: any) => {
        if (res.success) {
          contract.active = 1;
          contract.updated_at = res.result.updated_at;
          this.printAlert(this.getAlertPublish(res, contract));
        }
        this.blockui.stop('content');
      });
  }

  unpublish(contract: any): void {
    this.blockui.start('content');
    this.contractService.unpublishContract(contract.contract_id)
      .subscribe((res: any) => {
        if (res.success) {
          contract.active = 0;
          contract.updated_at = res.result.updated_at;
          this.printAlert(this.getAlertUnpublish(res, contract));
        }
        this.blockui.stop('content');
      });
  }

  getAlertPublish(result, contract): any {
    let mode, title, message;
    if (result.success) {
      mode = 'success';
      title = 'Publicación completada';
      message = 'El contrato ' + contract.contract_name + ' ha sido publicado';
    } else {
      mode = 'danger';
      title = 'Publicación fallida';
      message = 'El contrato ' + contract.contract_name + ' no pudo ser publicado';
    }
    return {
      'title': title,
      'message': message,
      'mode': mode
    }
  }

  getAlertUnpublish(result, contract): any {
    let mode, title, message;
    if (result.success) {
      mode = 'success';
      title = 'Despublicación completada';
      message = 'El contrato ' + contract.contract_name + ' ha sido despublicado';
    } else {
      mode = 'danger';
      title = 'Despublicación fallida';
      message = 'El contrato ' + contract.contract_name + ' no pudo ser despublicado';
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
