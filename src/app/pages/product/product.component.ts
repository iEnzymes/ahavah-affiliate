import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LayoutComponent } from '../../shared/components/layout/layout.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {}
