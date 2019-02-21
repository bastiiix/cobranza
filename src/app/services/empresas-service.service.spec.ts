import { TestBed } from '@angular/core/testing';

import { EmpresasServiceService } from './empresas-service.service';

describe('EmpresasServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpresasServiceService = TestBed.get(EmpresasServiceService);
    expect(service).toBeTruthy();
  });
});
