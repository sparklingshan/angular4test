import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { store } from '../../services/store/app.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app header';
  session = store.getState().userToken;
  constructor(private router: Router) {

  }

  logoClick() {
    this.router.navigateByUrl('/home');
  }

  ngOnInit() {
    let userButton = document.querySelector('#user-button');
    store.subscribe(() => {
      this.session = store.getState().userToken;
    });
    if (this.session !== null) {

    } else {
      userButton.textContent = 'login';
    }
  }
}
