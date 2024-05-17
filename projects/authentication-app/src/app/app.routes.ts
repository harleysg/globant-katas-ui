import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, Routes } from '@angular/router';
import { PrivateLayoutComponent } from '@shared/components/template/layout/private-layout/private-layout.component';
import { PublicLayoutComponent } from '@shared/components/template/layout/public-layout/public-layout.component';

// Services
@Injectable()
class UserToken {}

@Injectable()
class PermissionsService {
  canActivate(currentUser: UserToken, userId: string): boolean {
    // Validar toker | session | dbSession
    return false;
  }
  canMatch(currentUser: UserToken): boolean {
    return true;
  }
}

const canActivateTeam: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const { canActivate } = inject(PermissionsService)
  return canActivate(inject(UserToken), '1');
};

export const routes: Routes = [
  {
    title: 'Home',
    path: '',
    component: PublicLayoutComponent,
    children: [{
      path: '',
      loadComponent: () => import('./pages/home/home.page.component').then(comp => comp.HomePageComponent)
    }]
  },
  {
    title: 'Register',
    path: 'register',
    component: PublicLayoutComponent,
    children: [{
      path: '',
      loadComponent: () => import('./pages/register/register.page.component').then(comp => comp.RegisterPageComponent)
    }]
  },
  {
    // Private
    title: 'Profile',
    path: 'profile',
    // canActivate: [canActivateTeam], // Guard
    component: PrivateLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/profile/profile.page.component').then(comp => comp.ProfilePageComponent)
      },
      {
        path: 'edit',
        loadComponent: () => import('./pages/profile-edit/profile-edit.page.component').then(comp => comp.ProfileEditPageComponent)
      }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
