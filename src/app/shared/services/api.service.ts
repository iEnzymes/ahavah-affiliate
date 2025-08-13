import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { IRoom } from '../interfaces/room.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  readonly #http = inject(HttpClient);
  #baseUrl: string = environment.baseUrl || '';

  getCategory(): Observable<IRoom[]> {
    return this.#http.get<IRoom[]>(`${this.#baseUrl}/api/room/`);
  }
}
