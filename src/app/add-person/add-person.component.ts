import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-person',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-person.component.html',
  styleUrl: './add-person.component.css'
})

export class AddPerson{

    id: number;
    imie: string;
    nazwisko: string;
    wzrost: number;
    waga: number;
    wiek: number;
    plec: string;
    przeciwwskazania: string;
    poziomTreningowy: string;
    cel: string;
    wymiaryCialaWCM: number[];

    constructor() {
      this.id = 0;
      this.imie = '';
      this.nazwisko = '';
      this.wzrost = 0;
      this.waga = 0;
      this.wiek = 0;
      this.plec = '';
      this.przeciwwskazania = '';
      this.poziomTreningowy = '';
      this.cel = '';
      this.wymiaryCialaWCM = [];
    }
    inputName(event:any)
    {
      this.imie = event.target.value;
    }
    inputSurname(event:any)
    {
      this.nazwisko = event.targe.value;
    }
    inputHeigh(event:any)
    {
      this.wzrost = event.target.value;
    }
    inputWeight(event:any)
    {
      this.waga = event.taget.value;
    }
    inputAge(event:any)
    {
      this.wiek = event.taget.value;
    }
    inputGender(event:any)
    {
      this.plec = event.taget.value;
    }
    inputContraindications(event:any)
    {
      this.przeciwwskazania = event.taget.value;
    }
    inputTraningLvl(event:any)
    {
      this.poziomTreningowy = event.target.value;
    }
    inputGoal(event:any)
    {
      this.cel = event.taget.value;
    }
    inputBodyDimensions(event:any)
    {
      this.wymiaryCialaWCM = event.taget.value;
    }
 }


