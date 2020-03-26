import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[highlightDirective]'
})
export class HighlightDirectiveDirective {

  constructor(private el: ElementRef) { }

  @Input() colour: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.colour);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(colour: string) {
    this.el.nativeElement.style.backgroundColor = colour;
  }

}
