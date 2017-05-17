import { Component } from '@angular/core';

import { ApiService } from '../../services/api/api.service';

import { store } from '../../services/store/app.store';

@Component({
    selector: 'app-signin',
    templateUrl: 'signin.component.html',
    styleUrls: ['signin.component.css'],
})
export class SigninComponent {
    session = store.getState().userToken;
    user = null;
    constructor(private api: ApiService) {
        if (store.getState().currentUser !== 'login') {
            this.user = store.getState().currentUser;
        }
        store.subscribe(() => {
            this.session = store.getState().userToken;
            this.user = store.getState().currentUser;
        });
    }
    model = {
        email: null,
        password: null
    }
    login() {
        this.api.login(this.model);
    }
}