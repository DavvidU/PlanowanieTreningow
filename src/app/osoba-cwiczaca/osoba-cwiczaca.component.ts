import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  //do *ngFor

@Component({
  selector: 'app-osoba-cwiczaca',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './osoba-cwiczaca.component.html',
  styleUrl: './osoba-cwiczaca.component.css'
})
export class OsobaCwiczacaComponent {
  id: number;
  imie: string;
  nazwisko: string;
  wzrost: number;
  waga: number;
  wiek: number;
  plec: string;
  przeciwwskazania: string[];
  poziomTreningowy: string;
  cel: string
  wymiaryCialaWCM: number[];

  constructor()
  {
    this.id = 1;
    this.imie = 'Arnold';
    this.nazwisko = 'Szwarcnyger';
    this.wzrost = 200;
    this.waga = 120;
    this.wiek = 99;
    this.plec = "Muzcina";
    this.przeciwwskazania = ['bralem trenbolon'];
    this.poziomTreningowy = 'poczatkujacy';
    this.cel = 'utrzymanie';
    this.wymiaryCialaWCM = [90, 100, 90];
  }
}
