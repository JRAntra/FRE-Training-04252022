import { TestBed } from '@angular/core/testing';

import { canActivateGuard } from './canActivate.guard';

describe('canActivateGuard', () => {
  let guard: canActivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(canActivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
