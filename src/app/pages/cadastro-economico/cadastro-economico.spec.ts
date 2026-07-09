import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEconomico } from './cadastro-economico';

describe('CadastroEconomico', () => {
  let component: CadastroEconomico;
  let fixture: ComponentFixture<CadastroEconomico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroEconomico],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroEconomico);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
