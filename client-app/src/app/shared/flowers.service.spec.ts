import { TestBed, inject } from '@angular/core/testing';

import { FlowersService } from './flowers.service';

describe('FlowersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlowersService]
    });
  });

  it('should be created', inject([FlowersService], (service: FlowersService) => {
    expect(service).toBeTruthy();
  }));
});
