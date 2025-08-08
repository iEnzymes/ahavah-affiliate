import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.routes').then((m) => m.HomeRoutes),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.routes').then((m) => m.AboutRoutes),
  },
  {
    path: 'recommended',
    loadChildren: () =>
      import('./pages/recommended/recommended.routes').then(
        (m) => m.RecommendedRoutes,
      ),
  },
];
