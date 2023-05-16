import { TestBed } from '@angular/core/testing';

import { TestssService } from './testss.service';

describe('TestssService', () => {
  let service: TestssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
