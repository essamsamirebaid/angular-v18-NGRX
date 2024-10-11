import { Component } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { HighlightDirective } from './shared/highlight.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgClass,
    NgStyle,
    HighlightDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  number = 55;
  isClicked = false;
  ngOnInit(): void {}
}
