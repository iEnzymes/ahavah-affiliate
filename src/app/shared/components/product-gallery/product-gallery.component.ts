import { Component, input } from '@angular/core';

import { IImage } from '../../interfaces/image.interface';

@Component({
  selector: 'app-product-gallery',
  standalone: true,
  imports: [],
  templateUrl: './product-gallery.component.html',
  styleUrl: './product-gallery.component.scss',
})
export class ProductGalleryComponent {
  item = input<IImage[] | null>();
  fade: boolean = false;
  currentIndex = 0;

  onSelectImage(index: number) {
    this.fade = true;
    setTimeout(() => {
      this.currentIndex = index;
      this.fade = false;
    }, 200);
  }
}
