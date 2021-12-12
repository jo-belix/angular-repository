import { TestBed } from '@angular/core/testing';

import { FamilyLibService } from './family-lib.service';

describe('FamilyLibService', () => {
  let service: FamilyLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FamilyLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
