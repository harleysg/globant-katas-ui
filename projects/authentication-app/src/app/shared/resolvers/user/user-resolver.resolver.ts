import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
// -----
import { ApiService } from '@shared/service/api/api.service';
import { UserInfo } from '@shared/types';

export const userResolver: ResolveFn<Observable<UserInfo|boolean>> = (route, state) => {
  const apiService = inject(ApiService)
  const router = inject(Router)

  return apiService.profile().pipe(catchError(() => {
    router.navigate([''])
    return of(false);
  }))
};
