import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subagencias-form',
  templateUrl: './subagencias-form.component.html',
  styles: []
})
export class SubagenciasFormComponent implements OnInit {
  mode: string;

  constructor(private route: ActivatedRoute) {
    this.mode = this.route.snapshot.params.id ? 'Editar' : 'Crear';
  }

  ngOnInit() {
  }

}
