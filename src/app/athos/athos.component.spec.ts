import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthosComponent } from './athos.component';

describe('AthosComponent', () => {
  let component: AthosComponent;
  let fixture: ComponentFixture<AthosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AthosComponent]
    });
    fixture = TestBed.createComponent(AthosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
