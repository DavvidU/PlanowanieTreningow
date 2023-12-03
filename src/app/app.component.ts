import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { OsobaCwiczacaComponent } from './osoba-cwiczaca/osoba-cwiczaca.component';

import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomepageComponent ,OsobaCwiczacaComponent ,HomeComponent, CommonModule, RouterOutlet],
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
      <section class="osoba">
        <app-osoba-cwiczaca></app-osoba-cwiczaca>
      </section>
    </main>
  `,
  //templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Planowanie Treningów';
}
