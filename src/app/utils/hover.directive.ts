import { ComponentFactoryResolver, Directive, ElementRef, HostListener, Input, Pipe, PipeTransform, Renderer2, ViewContainerRef } from '@angular/core';
import { MatButton } from '@angular/material';

@Directive({
  selector: '[hover]'
})
export class HoverDirective{
 
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver, 
    private viewContainerRef: ViewContainerRef, 
    private matButton: MatButton, 
    private el:ElementRef,
    private renderer: Renderer2){}  
  
  @HostListener("mouseenter")
  onMouseHover(){
   this.matButton.color="accent"
  }

  @HostListener("mouseleave")
  onMouseLeave(){
    this.matButton.color="primary"
  }

}
