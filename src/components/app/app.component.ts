import { Component } from '@angular/core';
import { session } from '../../services/api/user.session';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app header';

  ngOnInit() {
    let userButton = document.querySelector('#user-button');
    if (session.login !== null) {

    } else {
      userButton.textContent = 'login';
    }
  }
}
