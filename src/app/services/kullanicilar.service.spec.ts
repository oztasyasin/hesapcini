import { TestBed } from '@angular/core/testing';

import { KullanicilarService } from './kullanicilar.service';

describe('KullanicilarService', () => {
  let service: KullanicilarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KullanicilarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
