import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';

import { IconsModule } from '../../../core/icons/icons.module';
import { FilterListComponent } from '../../../shared/components/filter-list/filter-list.component';
import { ItemCardComponent } from '../../../shared/components/item-card/item-card.component';
import { SearchComponent } from '../../../shared/components/search/search.component';
import { ICategory } from '../../../shared/interfaces/category.interface';
import { IProduct } from '../../../shared/interfaces/product.interface';
import { ISubCategory } from '../../../shared/interfaces/subcategory.interface';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    SearchComponent,
    ItemCardComponent,
    MatIcon,
    MatButtonModule,
    IconsModule,
    FilterListComponent,
    CommonModule,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  readonly #apiService = inject(ApiService);
  readonly route = inject(ActivatedRoute);

  isMenuOpen: boolean = false;

  category_id = this.route.snapshot.params['category_id'];
  products: IProduct[] = [];
  categories: { id: number; name: string }[] = [];
  subcategories: { id: number; name: string }[] = [];

  ngOnInit() {
    this.#apiService.getProducts(this.category_id).subscribe((data) => {
      this.products = data;
    });

    this.#apiService.getCategory().subscribe((data) => {
      this.categories = data.map((cat: ICategory) => ({
        id: cat.id,
        name: cat.name,
      }));
    });

    this.#apiService.getSubCategories(this.category_id).subscribe((data) => {
      this.subcategories = data.map((subcat: ISubCategory) => ({
        id: subcat.id,
        name: subcat.name,
      }));
    });
  }

  onToggleCategories() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onCategorySelected(selected: { id: number; name: string }) {
    this.category_id = selected.id;
    this.#apiService.getProducts(this.category_id).subscribe((data) => {
      this.products = data;
    });

    this.#apiService.getSubCategories(this.category_id).subscribe((data) => {
      this.subcategories = data.map((subcat: ISubCategory) => ({
        id: subcat.id,
        name: subcat.name,
      }));
    });
  }
}
