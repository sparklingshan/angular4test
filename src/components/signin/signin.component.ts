import { Component } from '@angular/core';

import { ApiService } from '../../services/api/api.service';

@Component({
    selector: 'app-signin',
    templateUrl: 'signin.component.html',
    styleUrls: ['signin.component.css'],
    providers: []
})
export class SigninComponent {
    constructor(private api: ApiService) { }
    model = {
        email: null,
        password: null
    }
    login() {
        
    }
}