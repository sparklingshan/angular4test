import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService]
    });
  });

  it('should inject api service', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
