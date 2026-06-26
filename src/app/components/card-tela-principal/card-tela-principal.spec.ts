import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTelaPrincipal } from './card-tela-principal';

describe('CardTelaPrincipal', () => {
  let component: CardTelaPrincipal;
  let fixture: ComponentFixture<CardTelaPrincipal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTelaPrincipal],
    }).compileComponents();

    fixture = TestBed.createComponent(CardTelaPrincipal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
