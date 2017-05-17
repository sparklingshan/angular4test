import { Injectable } from '@angular/core';

import { store, userLogin } from '../store/app.store';

@Injectable()
export class ApiService {
  email = 'guest@guest.com';
  pwd = 'guest';
  token = '';

  logout() {

  }

  login(user) {
    if (user.email === this.email && user.password === this.pwd) {
      store.dispatch(userLogin('guest+guest'));
    }
  }
}
