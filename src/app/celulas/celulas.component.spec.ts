import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelulasComponent } from './celulas.component';

describe('CelulasComponent', () => {
  let component: CelulasComponent;
  let fixture: ComponentFixture<CelulasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CelulasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CelulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
