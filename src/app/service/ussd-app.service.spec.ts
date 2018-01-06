import { TestBed, inject } from '@angular/core/testing';

import { UssdAppService } from './ussd-app.service';

describe('UssdAppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UssdAppService]
    });
  });

  it('should be created', inject([UssdAppService], (service: UssdAppService) => {
    expect(service).toBeTruthy();
  }));
});
