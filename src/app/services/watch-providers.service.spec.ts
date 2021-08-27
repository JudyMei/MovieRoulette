import { TestBed } from '@angular/core/testing';

import { WatchProvidersService } from './watch-providers.service';

describe('WatchProvidersService', () => {
  let service: WatchProvidersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchProvidersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
