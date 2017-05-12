import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  username = 'guest';
  pwd = 'guest';
  token = '';
  logout() {
    this.token = '';
  }
}
