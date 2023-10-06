import { TestBed } from '@angular/core/testing';

import { ManagerorderService } from './managerorder.service';

describe('ManagerorderService', () => {
  let service: ManagerorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
