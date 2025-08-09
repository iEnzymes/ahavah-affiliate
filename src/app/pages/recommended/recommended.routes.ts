import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecommendedComponent } from './recommended.component';

const routes: Routes = [
  {
    path: '',
    component: RecommendedComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./recommended-landing/recommended-landing.component').then(
            (c) => c.RecommendedLandingComponent,
          ),
      },
      {
        path: ':room',
        pathMatch: 'full',
        loadComponent: () =>
          import('./recommended-list/recommended-list.component').then(
            (c) => c.RecommendedListComponent,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecommendedRoutes {}
