import { Component } from '@angular/core';

import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { mocksProducts } from '../../../shared/mocks/mocks-product';

@Component({
  selector: 'app-recommended-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './recommended-list.component.html',
  styleUrl: './recommended-list.component.scss',
})
export class RecommendedListComponent {
  products = mocksProducts;
}
