import { TestBed } from '@angular/core/testing';

import { VendedorServiceService } from './vendedor-service.service';

describe('VendedorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VendedorServiceService = TestBed.get(VendedorServiceService);
    expect(service).toBeTruthy();
  });
});
