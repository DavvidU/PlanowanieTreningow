import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ListaOsobCwiczacychComponent } from './lista-osob-cwiczacych/lista-osob-cwiczacych.component';

import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListaOsobCwiczacychComponent ,HomeComponent, CommonModule, RouterOutlet],
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
      <section class="osobyCwiczace">
        <app-lista-osob-cwiczacych></app-lista-osob-cwiczacych>
      </section>
    </main>
  `,
  //templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Planowanie Treningów';
}
