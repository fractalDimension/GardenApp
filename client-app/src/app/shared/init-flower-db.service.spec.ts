import { TestBed, inject } from '@angular/core/testing';

import { InitFlowerDbService } from './init-flower-db.service';

describe('InitFlowerDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InitFlowerDbService]
    });
  });

  it('should be created', inject([InitFlowerDbService], (service: InitFlowerDbService) => {
    expect(service).toBeTruthy();
  }));
});
