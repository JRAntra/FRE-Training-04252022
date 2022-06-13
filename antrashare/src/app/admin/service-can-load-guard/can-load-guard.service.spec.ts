import { TestBed } from '@angular/core/testing';

import { CanLoadGuardService } from './can-load-guard.service';

describe('CanLoadGuardService', () => {
  let service: CanLoadGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanLoadGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
