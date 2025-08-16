import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { IProductRoom } from '../interfaces/product.interface';
import { IRoom } from '../interfaces/room.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  readonly #http = inject(HttpClient);
  #baseUrl: string = environment.baseUrl || '';

  getRooms(): Observable<IRoom[]> {
    return this.#http.get<IRoom[]>(`${this.#baseUrl}/api/room/`);
  }

  getProducts(room: string): Observable<IProductRoom> {
    return this.#http.get<IProductRoom>(
      `${this.#baseUrl}/api/product/?room=${room}`,
    );
  }
}
