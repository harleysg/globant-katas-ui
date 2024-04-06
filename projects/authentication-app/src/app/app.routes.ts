import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    title: 'Home',
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(comp => comp.HomeComponent)
  },
  {
    title: 'login',
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(mod => mod.LoginModule)
  },
  {
    title: 'register',
    path: 'register',
    loadComponent: () => import('./pages/register/register.component').then(comp => comp.RegisterComponent)
  },
  {
    title: 'profile',
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.component').then(comp => comp.ProfileComponent)
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
