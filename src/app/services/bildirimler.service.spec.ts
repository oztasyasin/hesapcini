import { TestBed } from '@angular/core/testing';

import { BildirimlerService } from './bildirimler.service';

describe('BildirimlerService', () => {
  let service: BildirimlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BildirimlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
