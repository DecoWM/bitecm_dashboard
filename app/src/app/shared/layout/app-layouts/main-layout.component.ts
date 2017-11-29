import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FadeZoomInTop } from '../../animations/fade-zoom-in-top.decorator';
import { AuthService } from './../../auth/auth.service';
import { SkinService } from './../skin/skin.service';

@FadeZoomInTop()
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styles: []
})
export class MainLayoutComponent implements OnInit {
  user: any;
  agencia: any;

  constructor(
    private auth: AuthService,
    private skin: SkinService
  ) { }

  ngOnInit() {
    this.skin.addSkin(this.auth.agencia);
  }

}
