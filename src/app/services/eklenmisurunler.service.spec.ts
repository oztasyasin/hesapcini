import { TestBed } from '@angular/core/testing';

import { EklenmisurunlerService } from './eklenmisurunler.service';

describe('EklenmisurunlerService', () => {
  let service: EklenmisurunlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EklenmisurunlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
