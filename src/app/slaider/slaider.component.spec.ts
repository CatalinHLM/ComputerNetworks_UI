import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlaiderComponent } from './slaider.component';

describe('SlaiderComponent', () => {
  let component: SlaiderComponent;
  let fixture: ComponentFixture<SlaiderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlaiderComponent]
    });
    fixture = TestBed.createComponent(SlaiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
