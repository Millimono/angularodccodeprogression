import { TestBed } from '@angular/core/testing';

import { Personne2Service } from './personne2.service';

describe('Personne2Service', () => {
  let service: Personne2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Personne2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
