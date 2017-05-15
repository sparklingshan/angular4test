import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { session } from '../../services/api/user.session';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app header';
  constructor(private router: Router) {

  }
  logoClick() {
    this.router.navigateByUrl('/home');
  }
  ngOnInit() {
    let userButton = document.querySelector('#user-button');
    if (session.login !== null) {
      userButton.textContent = session.user;
    } else {
      userButton.textContent = 'login';
    }
  }
}
