import { Component, inject, OnInit } from '@angular/core';

import { CategoryCardComponent } from '../../../shared/components/category-card/category-card.component';
import { SearchComponent } from '../../../shared/components/search/search.component';
import { ICategory } from '../../../shared/interfaces/category.interface';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'app-product-landing',
  standalone: true,
  imports: [SearchComponent, CategoryCardComponent],
  templateUrl: './product-landing.component.html',
  styleUrl: './product-landing.component.scss',
})
export class ProductLandingComponent implements OnInit {
  readonly #apiService = inject(ApiService);

  categories: ICategory[] = [];

  ngOnInit() {
    this.#apiService.getCategory().subscribe((data) => {
      this.categories = data;
    });
  }
}
