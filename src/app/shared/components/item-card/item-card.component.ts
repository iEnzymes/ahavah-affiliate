import { Component, input, output } from '@angular/core';

import { IItemCard } from '../../interfaces/itemcard.interface';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss',
})
export class ItemCardComponent {
  item = input.required<IItemCard>();
  outputSelected = output<IItemCard>();
}
