import {
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appTooltip]',
})
export class TooltipDirectiveDirective {
  private tooltipDiv: HTMLElement | null = null;
  @Input('appTooltip') tooltipText: string | undefined;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.tooltipDiv) {
      this.showTooltip();
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  private showTooltip(): void {
    this.tooltipDiv = this.renderer.createElement('div');
    this.renderer.addClass(this.tooltipDiv, 'tooltip');
    this.renderer.setProperty(this.tooltipDiv, 'textContent', this.tooltipText);
    this.renderer.setStyle(this.tooltipDiv, 'position', 'absolute');
    this.renderer.setStyle(
      this.tooltipDiv,
      'top',
      `${
        this.el.nativeElement.offsetTop + this.el.nativeElement.offsetHeight
      }px`
    );
    this.renderer.setStyle(
      this.tooltipDiv,
      'left',
      `${this.el.nativeElement.offsetLeft}px`
    );
    this.renderer.appendChild(document.body, this.tooltipDiv);
  }

  private hideTooltip(): void {
    if (this.tooltipDiv) {
      this.renderer.removeChild(document.body, this.tooltipDiv);
      this.tooltipDiv = null;
    }
  }
}
