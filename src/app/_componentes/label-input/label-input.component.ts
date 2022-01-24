import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { decorarSelectorFecha } from 'src/vanillajs-datepicker';

@Component({
  selector: 'app-label-input',
  templateUrl: './label-input.component.html',
  styleUrls: ['./label-input.component.css']
})
export class LabelInputComponent implements OnInit {
  @Input() campo: any;
  @Output() campoChange = new EventEmitter<any>();

  @Input() id!: string;
  @Input() etiqueta!: string;
  @Input() tipo: string = 'text';
  @Input() soloLectura: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.tipo === 'date') {
      decorarSelectorFecha();
    }
  }

  onChange(dato?: any) {
    console.log(this.campo, dato);

    if (dato) {
      this.campo = dato;
    }

    this.campoChange.emit(this.campo);
  }

}
