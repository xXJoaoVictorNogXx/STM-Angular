import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRegistro } from './input-registro';

describe('InputRegistro', () => {
  let component: InputRegistro;
  let fixture: ComponentFixture<InputRegistro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputRegistro],
    }).compileComponents();

    fixture = TestBed.createComponent(InputRegistro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
