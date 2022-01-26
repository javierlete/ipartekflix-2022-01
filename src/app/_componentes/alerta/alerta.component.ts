import { Component, Input, OnInit } from '@angular/core';
import { Alerta, Nivel } from 'src/app/_modelos/alerta';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {
  @Input() mensaje!: string;
  @Input() nivel!: Nivel;

  alerta: Alerta = {
    mensaje: 'Prueba de alerta',
    nivel: 'danger'
  }
  constructor() { }

  ngOnInit(): void {
    this.alerta = { mensaje: this.mensaje, nivel: this.nivel };
  }

}
