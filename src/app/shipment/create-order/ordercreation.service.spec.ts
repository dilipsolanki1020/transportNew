import { TestBed } from '@angular/core/testing';

import { OrdercreationService } from './ordercreation.service';

describe('OrdercreationService', () => {
  let service: OrdercreationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdercreationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
