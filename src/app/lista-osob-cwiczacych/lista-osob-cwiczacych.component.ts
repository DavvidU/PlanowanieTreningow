import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';  //do *ngFor
import { FormsModule } from '@angular/forms'; //do <input>
import { OsobaCwiczaca } from '../osoba-cwiczaca';

@Component({
  selector: 'app-lista-osob-cwiczacych',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-osob-cwiczacych.component.html',
  styleUrl: './lista-osob-cwiczacych.component.css'
})
export class ListaOsobCwiczacychComponent {
  wybranaOsoba: number = -1;
  listaOsobCwiczacych: OsobaCwiczaca[] = [
    {
      "id": 1,
      "imie": "Arnold",
      "nazwisko": "Szwarcnyger",
      "wzrost": 200,
      "waga": 120,
      "wiek": 99,
      "plec": "Muzcina",
      "przeciwwskazania": ['bralem trenbolon'],
      "poziomTreningowy": "poczatkujacy",
      "cel": "utrzymanie",
      "wymiaryCialaWCM": [90, 100, 90],
      "selected": -1
    },
    {
      "id": 2,
      "imie": "Dawid",
      "nazwisko": "Ugniewski",
      "wzrost": 200,
      "waga": 100,
      "wiek": 21,
      "plec": "Muzcina",
      "przeciwwskazania": ['Nie bralem trenbolonu'],
      "poziomTreningowy": "zaawansowany",
      "cel": "reedukcja",
      "wymiaryCialaWCM": [7, 7, 7],
      "selected": -1
    }
    
  ]
  select(wchich: number): void {
    this.wybranaOsoba = wchich;
  }
}
