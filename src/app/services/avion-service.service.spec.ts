import { TestBed } from '@angular/core/testing';

import { AvionServiceService } from './avion-service.service';

describe('AvionServiceService', () => {
  let service: AvionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
