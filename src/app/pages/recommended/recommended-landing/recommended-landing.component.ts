import { Component } from '@angular/core';

import { CategoryCardComponent } from '../../../shared/components/category-card/category-card.component';
import { mocksCategories } from '../../../shared/mocks/mocks-category';

@Component({
  selector: 'app-recommended-landing',
  standalone: true,
  imports: [CategoryCardComponent],
  templateUrl: './recommended-landing.component.html',
  styleUrl: './recommended-landing.component.scss',
})
export class RecommendedLandingComponent {
  categories = mocksCategories;
}
