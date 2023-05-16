import { TestBed } from '@angular/core/testing';

import { Authgured2Guard } from './authgured2.guard';

describe('Authgured2Guard', () => {
  let guard: Authgured2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Authgured2Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
