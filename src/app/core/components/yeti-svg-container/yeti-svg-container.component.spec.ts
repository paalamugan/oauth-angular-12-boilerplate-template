import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YetiSvgContainerComponent } from './yeti-svg-container.component';

describe('YetiSvgContainerComponent', () => {
  let component: YetiSvgContainerComponent;
  let fixture: ComponentFixture<YetiSvgContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YetiSvgContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YetiSvgContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
