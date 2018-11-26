import { TestBed } from '@angular/core/testing';

import { ListCountryService } from './list-country.service';

describe('ListCountryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListCountryService = TestBed.get(ListCountryService);
    expect(service).toBeTruthy();
  });
});
