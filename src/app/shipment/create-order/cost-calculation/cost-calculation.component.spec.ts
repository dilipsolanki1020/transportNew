import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostCalculationComponent } from './cost-calculation.component';

describe('CostCalculationComponent', () => {
  let component: CostCalculationComponent;
  let fixture: ComponentFixture<CostCalculationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CostCalculationComponent]
    });
    fixture = TestBed.createComponent(CostCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
