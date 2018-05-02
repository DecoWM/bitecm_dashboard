import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from "@angular/router";

//declare var $: any;

@Component({
  selector: 'sa-route-breadcrumbs',
  template: `
        <ol class="breadcrumb">
           <li *ngFor="let item of items"><a (click)="prevBreadcrumb()">{{item}}</a></li>
        </ol>
  `,
  styles: []
})
export class RouteBreadcrumbsComponent implements OnInit {

  ruta = null;
  public items: Array<string> = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.catchEvent();
  }

  ngOnInit() {
    this.catchEvent();
    //this.ruta = this.router.url;
  }

  catchEvent() {
    this.router.events
      .filter(e => e instanceof NavigationEnd)
      .subscribe(v => {
        this.items = [];
        this.extract(this.router.routerState.root)
      });
  }

  extract(route) {
    const pageTitle = route.data.value['pageTitle'];
    if (pageTitle && this.items.indexOf(pageTitle) === -1) {
        this.items.push(route.data.value['pageTitle']);
    }
    if (route.children) {
      route.children.forEach(it => {
        this.extract(it)
      })
    }
  }

  prevBreadcrumb(){
     parent.history.back();
     // var hash = "#3"; // window.location.hash;
     // console.log(hash);
     // console.log(this.ruta);
     // document.location.href = this.ruta + hash;
     // console.log("ruta:" + document.location.href);
     /*if(hash){
        hash = hash.split('#')[1];
        $(".paginate_button a[data-dt-idx="+ hash +"]").trigger('click');
     }*/
  }

}
