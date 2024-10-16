import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FirstComponent } from './first/first.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { LoadingComponent } from './loading/loading.component';
import { ErrorComponent } from './error/error.component';
import { AppServices } from './app.services';
import { Store } from '@ngrx/store';
import { loadCartItems } from './store/cart.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    FirstComponent,
    PlaceholderComponent,
    LoadingComponent,
    ErrorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(readonly appServices: AppServices, private store: Store) {}
  title = 'angular-v18';
  isVisable: boolean = false;
  items: string[] = [];
  carts: string[] = [];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.appServices.behavior.subscribe((res) => {
      this.carts = JSON.parse(localStorage.getItem('carts') as string);
    });

    this.store.dispatch(loadCartItems())
  }

  // getItem(childComponentRef: any) {
  //   childComponentRef.addItemToCard.subscribe((item: string) => {
  //     this.items.push(item);
  //   });
  // }
}
