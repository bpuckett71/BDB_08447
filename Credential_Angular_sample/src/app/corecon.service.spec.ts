import { TestBed } from '@angular/core/testing';

import { CoreconService } from './corecon.service';

describe('CoreconService', () => {
  let service: CoreconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
