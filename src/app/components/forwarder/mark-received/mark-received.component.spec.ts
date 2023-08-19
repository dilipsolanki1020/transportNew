import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkReceivedComponent } from './mark-received.component';

describe('MarkReceivedComponent', () => {
  let component: MarkReceivedComponent;
  let fixture: ComponentFixture<MarkReceivedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarkReceivedComponent]
    });
    fixture = TestBed.createComponent(MarkReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
