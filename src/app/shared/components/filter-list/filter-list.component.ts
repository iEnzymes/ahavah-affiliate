import { CommonModule } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AboutRoutes } from '../../../pages/about/about.routes';

@Component({
  selector: 'app-filter-list',
  standalone: true,
  imports: [CommonModule, AboutRoutes],
  templateUrl: './filter-list.component.html',
  styleUrl: './filter-list.component.scss',
})
export class FilterListComponent {
  #route = inject(ActivatedRoute);

  items = input.required<{ id: number; name: string }[]>();
  outputSelected = output<{ id: number; name: string }>();

  activeItem: number = Number(this.#route.snapshot.params['category_id']) ?? 0;

  onSelect(item: { id: number; name: string }) {
    this.activeItem = item.id;
    this.outputSelected.emit(item);
  }
}
