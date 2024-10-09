import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppServices {
  private cart: any[] = [];
  behavior: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() {}
  pushItemCart(item: string) {
    this.behavior.next(item)
    this.cart.push(item);
  }
}
