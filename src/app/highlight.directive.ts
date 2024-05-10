import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  exportAs: 'hl',
})
export class HighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostBinding('style')
  @HostListener('mouseenter')
  OnMouseenter() {
    this.changeBackgroundColor('yellow');
  }

  @HostListener('mouseleave') OnMouseleave() {
    this.changeBackgroundColor(null);
  }

  private changeBackgroundColor(color: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }

  toogle() {
    this.changeBackgroundColor('black');
  }
}
