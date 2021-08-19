import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLink1Component } from './nav-link1.component';

describe('NavLink1Component', () => {
  let component: NavLink1Component;
  let fixture: ComponentFixture<NavLink1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavLink1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLink1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
