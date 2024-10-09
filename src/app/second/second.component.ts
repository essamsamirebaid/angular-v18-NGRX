import { Component, EventEmitter, Output } from '@angular/core';
import { AppServices } from '../app.services';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss',
})
export class SecondComponent {
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
