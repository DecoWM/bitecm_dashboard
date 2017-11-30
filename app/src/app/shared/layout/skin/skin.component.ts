import {Component, OnInit} from '@angular/core';
import {AuthService} from './../../auth/auth.service';

@Component({
  selector: 'sa-skin',
  templateUrl: './skin.component.html'
})
export class SkinComponent implements OnInit {
  agencia: any;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.agencia = this.auth.branch;
  }
}
