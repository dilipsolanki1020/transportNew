import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleorderComponent } from './scheduleorder.component';

describe('ScheduleorderComponent', () => {
  let component: ScheduleorderComponent;
  let fixture: ComponentFixture<ScheduleorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleorderComponent]
    });
    fixture = TestBed.createComponent(ScheduleorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
