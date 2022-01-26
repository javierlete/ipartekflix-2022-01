import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCaja]'
})
export class CajaDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.classList.add('border', 'rounded', 'border-dark', 'shadow-lg', 'border-3');
  }

}
