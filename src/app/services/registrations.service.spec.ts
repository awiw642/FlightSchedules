import { TestBed, inject } from '@angular/core/testing';

import { RegistrationsService } from './registrations.service';

describe('RegistrationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistrationsService]
    });
  });

  it('should be created', inject([RegistrationsService], (service: RegistrationsService) => {
    expect(service).toBeTruthy();
  }));
});
