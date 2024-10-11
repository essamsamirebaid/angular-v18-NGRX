import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AppServices } from '../app.services';
import { Store } from '@ngrx/store';
import { addToCart, removeFromCart } from '../store/cart.actions';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss',
})
export class FirstComponent {
  constructor(readonly appServices: AppServices, private store: Store) {}
  @Output() addItemToCard = new EventEmitter();
  emitEvent(value: string) {
    var carts: string[] = JSON.parse(localStorage.getItem('carts') as string);
    carts.push(value);
    localStorage.setItem('carts', JSON.stringify(carts));
    this.addItemToCard.emit(value);
    this.appServices.pushItemCart(value);
  }
  updateCart(type: string, name?: string) {
  //   if (type === 'add') {
  //     this.store.dispatch(addToCart({ msg: name || '' }));
  //   } else {
  //     this.store.dispatch(removeFromCart());
  //   }
  }
}
