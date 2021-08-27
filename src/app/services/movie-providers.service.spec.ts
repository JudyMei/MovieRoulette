import { TestBed } from '@angular/core/testing';

import { MovieProvidersService } from './movie-providers.service';

describe('MovieProvidersService', () => {
  let service: MovieProvidersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieProvidersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
