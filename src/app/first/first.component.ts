import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AppServices } from '../app.services';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss',
})
export class FirstComponent {
  constructor(readonly appServices: AppServices) {}
  @Output() addItemToCard = new EventEmitter();
  emitEvent(value: string) {
    var carts:string[] = JSON.parse(localStorage.getItem('carts') as string)
    carts.push(value)
    localStorage.setItem('carts', JSON.stringify(carts));
    this.addItemToCard.emit(value);
    this.appServices.pushItemCart(value);
  }
}
