import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { cartReducer } from './store/cart.reducers';
import { provideEffects } from '@ngrx/effects';
import { CartsEffects } from './store/cart.effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter(routes),
    provideStore({
      cart: cartReducer,
    }),
    provideEffects([CartsEffects]),
  ],
};

export const AppConfig = {
  apiUrl: 'assets/data', // Base API URL
  anotherSetting: 'someValue',
  // Add other configurations as needed
};
