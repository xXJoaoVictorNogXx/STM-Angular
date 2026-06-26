import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribCombobox } from './contrib-combobox';

describe('ContribCombobox', () => {
  let component: ContribCombobox;
  let fixture: ComponentFixture<ContribCombobox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContribCombobox],
    }).compileComponents();

    fixture = TestBed.createComponent(ContribCombobox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
