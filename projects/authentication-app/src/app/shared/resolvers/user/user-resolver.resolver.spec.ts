import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
// -----
import { userResolver } from './user-resolver.resolver';
import { UserInfo } from '@shared/types';

describe('userResolver', () => {
  const executeResolver: ResolveFn<Observable<UserInfo|boolean>> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => userResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
