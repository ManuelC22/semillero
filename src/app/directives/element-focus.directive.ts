import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appElementFocus]'
})
export class ElementFocusDirective implements OnInit{

  constructor(private elementRef:ElementRef,private renderer2:Renderer2) { }

  ngOnInit(): void {
    const element = this.elementRef.nativeElement;
    this.renderer2.setStyle(element,'border-color','red');
    
    element.focus();
  }

}
