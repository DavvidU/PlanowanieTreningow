import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOsobCwiczacychComponent } from './lista-osob-cwiczacych.component';

describe('ListaOsobCwiczacychComponent', () => {
  let component: ListaOsobCwiczacychComponent;
  let fixture: ComponentFixture<ListaOsobCwiczacychComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaOsobCwiczacychComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaOsobCwiczacychComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
