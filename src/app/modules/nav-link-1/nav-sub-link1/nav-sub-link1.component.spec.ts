import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSubLink1Component } from './nav-sub-link1.component';

describe('NavSubLink1Component', () => {
  let component: NavSubLink1Component;
  let fixture: ComponentFixture<NavSubLink1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavSubLink1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSubLink1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
