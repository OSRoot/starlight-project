import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { aboutusResolver } from './aboutus.resolver';

describe('aboutusResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => aboutusResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
