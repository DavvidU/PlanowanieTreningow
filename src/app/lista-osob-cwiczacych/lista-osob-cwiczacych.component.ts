import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';  //do *ngFor
import { FormsModule } from '@angular/forms'; //do <input>
import { OsobaCwiczaca } from '../osoba-cwiczaca';
import { AddPerson } from '../add-person/add-person.component';

@Component({
  selector: 'app-lista-osob-cwiczacych',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-osob-cwiczacych.component.html',
  styleUrl: './lista-osob-cwiczacych.component.css'
})
export class ListaOsobCwiczacychComponent{

  wybranaOsoba: number = -1;
  listaOsobCwiczacych: AddPerson[] = [


   /* {
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
    }*/


  ]



  select(wchich: number): void {
    this.wybranaOsoba = wchich;
  }

  /*dodajOsobe(): void {
    const nowaOsoba: AddPerson = {
      id: this.listaOsobCwiczacych.length + 1,
      imie: this.imie,
      nazwisko: this.nazwisko,
      wzrost: this.wzrost,
      waga: this.waga,
      wiek: this.wiek,
      plec: this.plec,
      przeciwwskazania: this.przeciwwskazania,
      poziomTreningowy: this.poziomTreningowy,
      cel: this.cel,
      wymiaryCialaWCM: this.wymiaryCialaWCM,
      selected: -1
    };
    this.listaOsobCwiczacych.push(nowaOsoba);
}*/
}
