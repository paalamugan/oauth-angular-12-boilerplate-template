import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSubLink3Component } from './nav-sub-link3.component';

describe('NavSubLink3Component', () => {
  let component: NavSubLink3Component;
  let fixture: ComponentFixture<NavSubLink3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavSubLink3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSubLink3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
