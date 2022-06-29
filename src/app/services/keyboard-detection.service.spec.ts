import { TestBed } from '@angular/core/testing';

import { KeyboardDetectionService } from './keyboard-detection.service';

describe('KeyboardDetectionService', () => {
  let service: KeyboardDetectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeyboardDetectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
