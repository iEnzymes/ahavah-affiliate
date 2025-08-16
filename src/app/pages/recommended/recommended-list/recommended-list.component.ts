import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { IProduct } from '../../../shared/interfaces/product.interface';
import { IRoom } from '../../../shared/interfaces/room.interface';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'app-recommended-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './recommended-list.component.html',
  styleUrl: './recommended-list.component.scss',
})
export class RecommendedListComponent implements OnInit {
  readonly #activatedRoute = inject(ActivatedRoute);
  readonly #apiService = inject(ApiService);

  roomFilter = this.#activatedRoute.snapshot.params['room'];
  products: IProduct[] = [];
  room: IRoom | null = null;

  ngOnInit() {
    this.#apiService
      .getProducts(this.roomFilter)
      .subscribe(({ products, room }) => {
        this.products = products;
        this.room = room;
      });
  }
}
