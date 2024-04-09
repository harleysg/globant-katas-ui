import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    title: 'Home',
    path: '',
    loadComponent: () => import('./pages/home/home.page.component').then(comp => comp.HomePageComponent)
  },
  {
    title: 'login',
    path: 'login',
    loadChildren: () => import('./pages/login/login.page.module').then(mod => mod.LoginPageModule)
  },
  {
    title: 'register',
    path: 'register',
    loadComponent: () => import('./pages/register/register.page.component').then(comp => comp.RegisterPageComponent)
  },
  {
    title: 'profile',
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page.component').then(comp => comp.ProfilePageComponent)
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
