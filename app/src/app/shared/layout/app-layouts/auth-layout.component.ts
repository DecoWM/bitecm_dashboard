import { Component, OnInit } from '@angular/core';
import {FadeZoomInTop} from '../../animations/fade-zoom-in-top.decorator';
import {config} from '../../smartadmin.config';
import {SkinService} from './../skin/skin.service';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styles: []
})
export class AuthLayoutComponent implements OnInit {

  constructor(private skin: SkinService) { }

  ngOnInit() {
    // this.skin.removeSkin();
  }

}
