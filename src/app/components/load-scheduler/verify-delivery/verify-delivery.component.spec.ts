import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyDeliveryComponent } from './verify-delivery.component';

describe('VerifyDeliveryComponent', () => {
  let component: VerifyDeliveryComponent;
  let fixture: ComponentFixture<VerifyDeliveryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyDeliveryComponent]
    });
    fixture = TestBed.createComponent(VerifyDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
