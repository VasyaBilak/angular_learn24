import {Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
    selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {
    
    @Input('appBackground') hoverColor: string = 'green';
    @Input() defaultColor: string = 'transparent';
    @HostBinding('style.backgroundColor') background: string;

    constructor(private element: ElementRef, private renderer: Renderer2) {}

    ngOnInit(){
      this.background = this.defaultColor;
}

@HostListener('mouseenter') MouseEvent() {
        this.background=this.hoverColor;
}

@HostListener('mouseleave') MouseLeave() {
        this.background=this.defaultColor;
}