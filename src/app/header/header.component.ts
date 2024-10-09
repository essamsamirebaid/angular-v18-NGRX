import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppServices } from '../app.services';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() items:string[] = []
  carts:string[] = []
  constructor(readonly appServices: AppServices) {
    this.carts = JSON.parse(localStorage.getItem('carts') as string);
  }

}
