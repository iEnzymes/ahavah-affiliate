import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./product-landing/product-landing.component').then(
            (c) => c.ProductLandingComponent,
          ),
      },
      {
        path: 'list/:category_id',
        pathMatch: 'full',
        loadComponent: () =>
          import('./product-list/product-list.component').then(
            (c) => c.ProductListComponent,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutes {}
