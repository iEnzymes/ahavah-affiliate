import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

import { AboutRoutes } from '../../../pages/about/about.routes';

@Component({
  selector: 'app-filter-list',
  standalone: true,
  imports: [CommonModule, AboutRoutes],
  templateUrl: './filter-list.component.html',
  styleUrl: './filter-list.component.scss',
})
export class FilterListComponent {
  items = input.required<{ id: number; name: string }[]>();
  outputSelected = output<{ id: number; name: string }>();

  onSelect(item: { id: number; name: string }) {
    this.outputSelected.emit(item);
  }
}
