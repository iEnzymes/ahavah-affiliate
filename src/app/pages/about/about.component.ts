import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LayoutComponent } from '../../shared/components/layout/layout.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
