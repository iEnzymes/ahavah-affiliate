import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ICategory } from '../interfaces/category.interface';
import { ISubCategory } from '../interfaces/subcategory.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  readonly #http = inject(HttpClient);
  #baseUrl: string = environment.baseUrl || '';

  getRooms(): Observable<ISubCategory[]> {
    return this.#http.get<ISubCategory[]>(`${this.#baseUrl}/api/subcategory/`);
  }

  getCategory(): Observable<ICategory[]> {
    return this.#http.get<ICategory[]>(`${this.#baseUrl}/api/category/`);
  }

  // getProducts(subcategory: string): Observable<IProduct[]> {
  //   return this.#http.get<IProduct[]>(
  //     `${this.#baseUrl}/api/product/?subcategory=${subcategory}`,
  //   );
  // }
}
