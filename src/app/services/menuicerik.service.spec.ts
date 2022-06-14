import { TestBed } from '@angular/core/testing';

import { MenuicerikService } from './menuicerik.service';

describe('MenuicerikService', () => {
  let service: MenuicerikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuicerikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
