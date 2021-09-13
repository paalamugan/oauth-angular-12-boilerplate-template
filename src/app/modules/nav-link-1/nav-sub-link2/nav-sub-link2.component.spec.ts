import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSubLink2Component } from './nav-sub-link2.component';

describe('NavSubLink2Component', () => {
  let component: NavSubLink2Component;
  let fixture: ComponentFixture<NavSubLink2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavSubLink2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSubLink2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
