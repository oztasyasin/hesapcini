import { TestBed } from '@angular/core/testing';

import { CeksenetService } from './ceksenet.service';

describe('CeksenetService', () => {
  let service: CeksenetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CeksenetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
