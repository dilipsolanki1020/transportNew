import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkDeliveredComponent } from './mark-delivered.component';

describe('MarkDeliveredComponent', () => {
  let component: MarkDeliveredComponent;
  let fixture: ComponentFixture<MarkDeliveredComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarkDeliveredComponent]
    });
    fixture = TestBed.createComponent(MarkDeliveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
