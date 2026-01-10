import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCelulaComponent } from './card-celula.component';

describe('CardCelulaComponent', () => {
  let component: CardCelulaComponent;
  let fixture: ComponentFixture<CardCelulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCelulaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCelulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
