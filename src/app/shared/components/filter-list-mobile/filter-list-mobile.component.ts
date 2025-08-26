import { Component, inject, input, output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter-list-mobile',
  standalone: true,
  imports: [],
  templateUrl: './filter-list-mobile.component.html',
  styleUrl: './filter-list-mobile.component.scss',
})
export class FilterListMobileComponent {
  #route = inject(ActivatedRoute);

  items = input.required<{ id: number; name: string }[]>();
  outputSelected = output<{ id: number; name: string }>();

  activeItem: number = Number(this.#route.snapshot.params['category_id']) ?? 0;

  onSelect(item: { id: number; name: string }) {
    this.activeItem = item.id;
    this.outputSelected.emit(item);
  }
}
