import { TestBed } from '@angular/core/testing';

import { AbonelikService } from './abonelik.service';

describe('AbonelikService', () => {
  let service: AbonelikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbonelikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
