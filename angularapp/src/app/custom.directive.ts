import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {
    
  constructor(private el : ElementRef, private render:Renderer2) { }
    
    
}
