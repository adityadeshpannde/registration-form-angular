import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';

  showRegistrationForm: boolean = false;
  showProfileScreen: boolean = false;

  openRegistrationForm() {
    this.showRegistrationForm = true;
    this.showProfileScreen = false;
  }

  openProfileScreen() {
    this.showRegistrationForm = false;
    this.showProfileScreen = true;
  }
}
