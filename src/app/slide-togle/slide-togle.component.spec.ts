import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideTogleComponent } from './slide-togle.component';

describe('SlideTogleComponent', () => {
  let component: SlideTogleComponent;
  let fixture: ComponentFixture<SlideTogleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideTogleComponent]
    });
    fixture = TestBed.createComponent(SlideTogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
