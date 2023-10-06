import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSubmissionComponent } from './order-submission.component';

describe('OrderSubmissionComponent', () => {
  let component: OrderSubmissionComponent;
  let fixture: ComponentFixture<OrderSubmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderSubmissionComponent]
    });
    fixture = TestBed.createComponent(OrderSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
