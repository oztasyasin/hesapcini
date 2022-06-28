import { TestBed } from '@angular/core/testing';

import { BorcService } from './borc.service';

describe('BorcService', () => {
  let service: BorcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BorcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
