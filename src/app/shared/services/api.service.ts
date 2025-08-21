import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ICategory } from '../interfaces/category.interface';
import { IProduct } from '../interfaces/product.interface';
import { ISubCategory } from '../interfaces/subcategory.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  readonly #http = inject(HttpClient);
  #baseUrl: string = environment.baseUrl || '';

  getCategory(): Observable<ICategory[]> {
    return this.#http.get<ICategory[]>(`${this.#baseUrl}/api/category/`);
  }

  getSubCategories(category_id?: number): Observable<ISubCategory[]> {
    return this.#http.get<ISubCategory[]>(
      `${this.#baseUrl}/api/subcategory/?category_id=${category_id}`,
    );
  }

  getProducts(
    categoryId?: number,
    subcategoryId?: number,
  ): Observable<IProduct[]> {
    const params: { category_id?: number; subcategory_id?: number } = {};
    categoryId ? (params.category_id = categoryId) : undefined;
    subcategoryId ? (params.subcategory_id = subcategoryId) : undefined;

    return this.#http.get<IProduct[]>(`${this.#baseUrl}/api/product/`, {
      params,
    });
  }
}
