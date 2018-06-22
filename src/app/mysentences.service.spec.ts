import { TestBed, inject } from '@angular/core/testing';

import { MysentencesService } from './mysentences.service';

describe('MysentencesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MysentencesService]
    });
  });

  it('should be created', inject([MysentencesService], (service: MysentencesService) => {
    expect(service).toBeTruthy();
  }));
});
