import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  greetingMessage: string = 'Welcome to our application!';

  login(): void {
    // Dodaj logikę przekierowania do formularza logowania lub innych działań
    console.log('Redirect to login page');
  }

  register(): void {
    // Dodaj logikę przekierowania do formularza rejestracji lub innych działań
    console.log('Redirect to registration page');
  }
}
