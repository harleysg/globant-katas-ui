import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
// -----
import { AuthenticationService } from '@shared/service/authentication/authentication.service';

export const loggedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const accessService = inject(AuthenticationService)

  if (accessService.isTokenValid()) return true

  return router.navigate([''])
};

export const publicGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const accessService = inject(AuthenticationService)

  if (!accessService.isTokenValid()) return true

  return router.navigate(['profile'])
};
