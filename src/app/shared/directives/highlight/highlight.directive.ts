import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{
  @Input() backgroundColor: string;
  @Input() color: string;

  constructor(
    private element: ElementRef
  ) {
    this.backgroundColor = 'black';
    this.color = 'white';
  }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.backgroundColor;
    this.element.nativeElement.style.color = this.color;
  }

}
