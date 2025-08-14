import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';

import { IconsModule } from '../../../core/icons/icons.module';
import { navItems } from '../../utils/navigation-items';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, MatIcon, MatButtonModule, IconsModule, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  #router: Router = inject(Router);
  isHidden = false;
  items = navItems;

  isMenuOpen: boolean = false;

  currentRoute: string = '';

  ngOnInit() {
    this.currentRoute = this.#router.url;

    this.#router.events.subscribe(() => {
      this.currentRoute = this.#router.url;
    });
  }

  onToggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
