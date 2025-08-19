import { Component, input } from '@angular/core';

import { RouterLink } from '@angular/router';
import { ICategory } from '../../interfaces/category.interface';
import { IProduct } from '../../interfaces/product.interface';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss',
})
export class ItemCardComponent {
  item = input.required<ICategory | IProduct>();
}
