import { TestBed } from '@angular/core/testing';

import { ParcoursService } from './parcours.service';

describe('ParcoursService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParcoursService = TestBed.get(ParcoursService);
    expect(service).toBeTruthy();
  });
});
