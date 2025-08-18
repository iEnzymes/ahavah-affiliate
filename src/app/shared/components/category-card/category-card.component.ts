import { Component, input } from '@angular/core';

import { ICategory } from '../../interfaces/category.interface';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss',
})
export class CategoryCardComponent {
  category = input.required<ICategory>();
}
