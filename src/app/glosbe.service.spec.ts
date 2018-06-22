import { TestBed, inject } from '@angular/core/testing';

import { GlosbeService } from './glosbe.service';

describe('GlosbeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlosbeService]
    });
  });

  it('should be created', inject([GlosbeService], (service: GlosbeService) => {
    expect(service).toBeTruthy();
  }));
});
