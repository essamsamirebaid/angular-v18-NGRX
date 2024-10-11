import { Component, EventEmitter, Output } from '@angular/core';
import { AppServices } from '../app.services';
import { Store } from '@ngrx/store';
import { addToCart, removeFromCart } from '../store/cart.actions';
import { CartItem } from '../store/cart-item.model';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { selectAllCartItems } from '../store/cart.selectors';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss',
})
export class SecondComponent {
  cartItems: Observable<CartItem[]>

  constructor(readonly appServices: AppServices, private store: Store) {

    this.cartItems = this.store.select(selectAllCartItems)
    this.store.select(selectAllCartItems).subscribe((res) => {
        console.log('res :>> ', res);
    })
  }

  @Output() addItemToCard = new EventEmitter();

  emitEvent(value: string) {
    var carts: string[] = JSON.parse(localStorage.getItem('carts') as string);
    carts.push(value);
    localStorage.setItem('carts', JSON.stringify(carts));
    this.addItemToCard.emit(value);
    this.appServices.pushItemCart(value);
  }
  updateCart(item: CartItem, type: string) {
    if (type === 'add') {
      this.store.dispatch(addToCart({ item }));
    } else {
      this.store.dispatch(removeFromCart({itemId:item.id}));    }
  }
}
