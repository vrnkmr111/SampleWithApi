import { TestBed } from '@angular/core/testing';

import { UserServceService } from './user-servce.service';

describe('UserServceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserServceService = TestBed.get(UserServceService);
    expect(service).toBeTruthy();
  });
});
