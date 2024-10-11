import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppServices } from '../app.services';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CartState } from '../store/cart-item.model';
import { selectAllCartItemsQuantity } from '../store/cart.selectors';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  // @Input() items: string[] = [];
  itemsQuantity$: Observable<number>;
  cartsCount: any;
  constructor(
    readonly appServices: AppServices,
    private store: Store<CartState>
  ) {
    this.itemsQuantity$ = this.store.select(selectAllCartItemsQuantity);
  }
}
