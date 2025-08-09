import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

import { IRoom } from '../../interfaces/room.interface';

@Component({
  selector: 'app-room-card',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './room-card.component.html',
  styleUrl: './room-card.component.scss',
})
export class RoomCardComponent {
  room = input.required<IRoom>();

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
