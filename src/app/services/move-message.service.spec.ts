import { TestBed, inject } from '@angular/core/testing';

import { MoveMessageService } from './move-message.service';

describe('MoveMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoveMessageService]
    });
  });

  it('should be created', inject([MoveMessageService], (service: MoveMessageService) => {
    expect(service).toBeTruthy();
  }));
});
