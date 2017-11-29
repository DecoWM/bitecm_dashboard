import { Component, OnInit } from '@angular/core';
import {FadeZoomInTop} from '../../animations/fade-zoom-in-top.decorator';
import {SkinService} from './../skin/skin.service';

@FadeZoomInTop()
@Component({
  selector: 'app-empty-layout',
  templateUrl: './empty-layout.component.html',
  styles: []
})
export class EmptyLayoutComponent implements OnInit {

  constructor(private skin: SkinService) { }

  ngOnInit() {
    this.skin.removeSkin();
  }

}
