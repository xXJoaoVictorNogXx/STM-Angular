import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroNovoContrib } from './cadastro-novo-contrib';

describe('CadastroNovoContrib', () => {
  let component: CadastroNovoContrib;
  let fixture: ComponentFixture<CadastroNovoContrib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroNovoContrib],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroNovoContrib);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
