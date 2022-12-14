import { TestBed } from '@angular/core/testing';

import { ScadminGuard } from './scadmin.guard';

describe('ScadminGuard', () => {
  let guard: ScadminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ScadminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
