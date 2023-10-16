import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { blogdetailsResolver } from './blogdetails.resolver';

describe('blogdetailsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => blogdetailsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
