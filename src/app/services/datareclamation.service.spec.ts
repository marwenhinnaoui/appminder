import { TestBed } from '@angular/core/testing';

import { DatareclamationService } from './datareclamation.service';

describe('DatareclamationService', () => {
  let service: DatareclamationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatareclamationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
