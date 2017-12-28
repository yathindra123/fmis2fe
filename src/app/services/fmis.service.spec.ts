import { TestBed, inject } from '@angular/core/testing';

import { FmisService } from './fmis.service';

describe('FmisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FmisService]
    });
  });

  it('should be created', inject([FmisService], (service: FmisService) => {
    expect(service).toBeTruthy();
  }));
});
