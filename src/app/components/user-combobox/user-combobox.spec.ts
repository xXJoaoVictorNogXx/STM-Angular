import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCombobox } from './user-combobox';

describe('UserCombobox', () => {
  let component: UserCombobox;
  let fixture: ComponentFixture<UserCombobox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCombobox],
    }).compileComponents();

    fixture = TestBed.createComponent(UserCombobox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
