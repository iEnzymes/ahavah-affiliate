import { Component, input, output } from '@angular/core';

import { IItemCard } from '../../interfaces/itemcard.interface';

@Component({
  selector: 'app-product-modal',
  standalone: true,
  imports: [],
  templateUrl: './product-modal.component.html',
  styleUrl: './product-modal.component.scss',
})
export class ProductModalComponent {
  product = input.required<IItemCard | null>();
  openLink = output<string | undefined>();
  showModal = input.required<boolean>();
  close = output<void>();
}
