import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';  //do *ngFor
import { FormsModule } from '@angular/forms'; //do <input>
import { OsobaCwiczaca } from '../osoba-cwiczaca';

@Component({
  selector: 'app-osoba-cwiczaca',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './osoba-cwiczaca.component.html',
  styleUrl: './osoba-cwiczaca.component.css'
})
export class OsobaCwiczacaComponent {
  @Input() osobaCwiczaca!: OsobaCwiczaca;

  select(wchich: number): void {
    this.osobaCwiczaca.selected = wchich;
  }

  save(): void {

  }
}
