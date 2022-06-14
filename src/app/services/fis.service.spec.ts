import { TestBed } from '@angular/core/testing';

import { FisService } from './fis.service';

describe('FisService', () => {
  let service: FisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
