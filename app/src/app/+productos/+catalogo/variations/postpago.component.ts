import { Component, OnInit, Type, Input, Output, ViewChild, ViewChildren, QueryList, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { VariationService } from './../variation.service';
import { NotificationService } from '../../../shared/utils/notification.service';

import { BlockUIService } from 'ng-block-ui';

declare var $: any;

@Component({
  selector: 'postpago-variations',
  templateUrl: './postpago.component.html',
  styles: []
})
export class PostpagoVariationsComponent implements OnInit {
  contracts: any = [];
  current: number = 0;
  @Output() onAlert: EventEmitter<any> = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private variationService: VariationService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.current = 1;
    this.variationService.getContracts()
      .subscribe((data: any) => {
      if (data.success) {
        this.contracts = data.result;
      }
    });
  }

  printAlert(alert) {
    this.onAlert.emit(alert);
  }

  controla(){
    console.log(this.current);
  }
//
  //click_action(){

    /*
    $('.accordeon').bind('click', 
    function() {
         //alert('Active tab index: ' + $(this).accordion('option', 'active'))
         console.log('Active tab index: ' + $(this).accordeon('option', 'active'));
    });*/

    /*
    var acc = document.getElementsByClassName("accordeon");
    var i = 0;
    console.log(acc);
    for (i = 0; i < acc.length; i++) {
      //cc[i] = click_action;
      acc[i].removeClass("active");
    }*/


    /*
    $('.accordeon').bind('accordionchange', 
    function() {
         alert('Active tab index: ' + $(this).accordion('option', 'active'))
    });*/

    /*
    console.log("HOLA1");
    $('.accordeon').click(function(){
      console.log("HOLA2");
      if( $(this).hasClass('active') ){
        $(this).removeClass('active');
        $(this).next().removeClass('show');
      }
      else{
        $('.accordeon').removeClass('active');
        $('.panel').removeClass('show');

        $(this).addClass('active');
        $(this).next().addClass('show');
      }
    });*/
  //}

  /*
  activarAcordeon(){
    var i = 0;
    var acc = document.getElementsByClassName("accordion");
    for (i = 0; i < acc.length; i++) {
      acc[i].onclick = click_action;
      acc[j].classList.remove("active");
    }

  }
  */

  /*
  $('.accordeon').click(function(){

  if( $(this).hasClass('active') ){
    $(this).removeClass('active');
    $(this).next().removeClass('show');
  }else{
    $('.accordion').removeClass('active');
    $('.panel').removeClass('show');

    $(this).addClass('active');
    $(this).next().addClass('show');
  }

});
*/

  //$('.accordion').removeClass('active');

}
