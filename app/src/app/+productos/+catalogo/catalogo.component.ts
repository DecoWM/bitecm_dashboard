import { Component, OnInit, Type, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ProductService } from './product.service';
import { NotificationService } from '../../shared/utils/notification.service';

import { BlockUIService } from 'ng-block-ui';

@Component({
  selector: 'catalogo',
  templateUrl: './catalogo.component.html',
  styles: []
})
export class CatalogoComponent implements OnInit {
  loadingStatus: string;
  itemsObs: Subject<any> = new Subject();
  dtTrigger: Subject<any> = new Subject();

  options = {
    dom: 'Bfrtip',
    pageLength: 25,
    columnDefs: [ {
      targets: [ 8 ],
      orderable: false
    } ],
    order: [[5, 'desc']],
    // colReorder: true
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private productService: ProductService,
    private notificationService: NotificationService
  ) {
    this.loadingStatus = 'Cargando productos...';
  }

  ngOnInit() {
    this.blockui.start('content');
    this.productService.getProductos()
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

  detail(product: any): void {
    this.router.navigate([product.product_id], {relativeTo: this.route});
  }

  showPopupPublish(product): void {
    this.notificationService.smartMessageBox({
      title : `<i class="fa fa-sign-out txt-color-orangeDark"></i> Publicar 
        <span class="txt-color-orangeDark">
          <strong>${product.brand_name} ${product.product_model}</strong>
        </span>`,
      content : '¿Seguro que quieres publicar este producto? Aparecerá en la tienda para poder ser adquirido.',
      buttons : '[No][Si]'
    }, (ButtonPressed) => {
      if (ButtonPressed === 'Si') {
        this.publish(product);
      }
    });
  }

  showPopupUnpublish(product): void {
    this.notificationService.smartMessageBox({
      title : `<i class="fa fa-sign-out txt-color-orangeDark"></i> Despublicar 
        <span class="txt-color-orangeDark">
          <strong>${product.brand_name} ${product.product_model}</strong>
        </span>`,
      content : '¿Seguro que quieres despublicar este producto? Desaparecerá de la tienda y ya no podrá ser adquirido.',
      buttons : '[No][Si]'
    }, (ButtonPressed) => {
      if (ButtonPressed === 'Si') {
        this.unpublish(product);
      }
    });
  }

  publish(product: any): void {
    this.blockui.start('content');
    this.productService.publishProduct(product.product_id)
      .subscribe((res: any) => {
        console.log(res);
        if (res.success) {
          product.active = 1;
          product.updated_at = res.result.updated_at;
          product.publish_at = res.result.publish_at;
        }
        this.blockui.stop('content');
      });
  }

  unpublish(product: any): void {
    this.blockui.start('content');
    this.productService.unpublishProduct(product.product_id)
      .subscribe((res: any) => {
        console.log(res);
        if (res.success) {
          product.active = 0;
          product.updated_at = res.result;
        }
        this.blockui.stop('content');
      });
  }
}
