import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsobaCwiczacaComponent } from './osoba-cwiczaca.component';

describe('OsobaCwiczacaComponent', () => {
  let component: OsobaCwiczacaComponent;
  let fixture: ComponentFixture<OsobaCwiczacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsobaCwiczacaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OsobaCwiczacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
