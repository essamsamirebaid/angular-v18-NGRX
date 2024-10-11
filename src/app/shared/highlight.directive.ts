import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[highlight]',
  host: {
    '(click)': 'applyLogic()',
  },
  standalone: true,
})
export class HighlightDirective {
  @Input() number: number = 0;
  @Input() divisibleBy: number = 1;

  constructor(private el: ElementRef) {}

  applyLogic() {
    if (this.number % this.divisibleBy === 0) {
      this.el.nativeElement.style.color = 'green';
    } else {
      this.el.nativeElement.style.color = 'red';
    }
  }
}
