import { Routes } from '@angular/router';
// -----
import { loggedGuard, publicGuard } from '@shared/guard/logged/logged.guard';
import { userResolver } from '@shared/resolvers/user/user-resolver.resolver';
// -----
import { PrivateLayoutComponent } from '@shared/components/template/layout/private-layout/private-layout.component';
import { PublicLayoutComponent } from '@shared/components/template/layout/public-layout/public-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    canActivate: [publicGuard],
    children: [
      {
        title: 'Home',
        path: '',
        loadComponent: () => import('./pages/home/home.page.component').then(comp => comp.HomePageComponent)
      },
      {
        title: 'Register',
        path: 'register',
        loadComponent: () => import('./pages/register/register.page.component').then(comp => comp.RegisterPageComponent)
      }
    ]
  },
  {
    // Private
    title: 'Profile',
    path: 'profile',
    component: PrivateLayoutComponent,
    canActivate: [loggedGuard],
    resolve: {
      profile: userResolver
    },
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
