import { TestBed } from '@angular/core/testing';

import { SigninService } from './signin.service';

describe('SigninService', () => {

  let service: SigninService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SigninService
      ]
    });

    service = TestBed.inject(SigninService);
  });

  it('should be created', () => {
    // Then
    expect(service).toBeTruthy();
  });

});
