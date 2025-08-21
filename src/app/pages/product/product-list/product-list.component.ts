import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';

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
  readonly router = inject(Router);

  categoryId = signal<number | null>(
    this.route.snapshot.params['category_id'] ?? null,
  );
  subcategoryId = signal<number | null>(null);

  isMenuOpen: boolean = false;
  products: IProduct[] = [];
  categories: { id: number; name: string }[] = [];
  subcategories: { id: number; name: string }[] = [];

  constructor() {
    const productParams = computed(() => ({
      category_id: this.categoryId(),
      subcategory_id: this.subcategoryId(),
    }));

    toObservable(productParams).subscribe(({ category_id, subcategory_id }) => {
      this.#apiService
        .getProducts(
          category_id ? category_id : undefined,
          subcategory_id ? subcategory_id : undefined,
        )
        .subscribe((data) => {
          this.products = data;
        });

      this.#apiService
        .getSubCategories(category_id ? category_id : undefined)
        .subscribe((data) => {
          this.subcategories = data.map((subcat: ISubCategory) => ({
            id: subcat.id,
            name: subcat.name,
          }));
        });
    });
  }

  ngOnInit() {
    this.#apiService.getCategory().subscribe((data) => {
      this.categories = data.map((cat: ICategory) => ({
        id: cat.id,
        name: cat.name,
      }));
    });
  }

  onToggleCategories() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onCategorySelected(selected: { id: number; name: string }) {
    this.categoryId.set(selected.id);
    this.subcategoryId.set(null);

    this.router.navigate(['products', 'list', selected.id]);
  }

  onSubCategorySelected(selected: { id: number; name: string }) {
    this.subcategoryId.set(selected.id);
  }
}
