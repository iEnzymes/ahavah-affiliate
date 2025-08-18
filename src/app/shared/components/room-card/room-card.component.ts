import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-room-card',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './room-card.component.html',
  styleUrl: './room-card.component.scss',
})
export class RoomCardComponent {
  // room = input.required<any>();
  // fade: boolean = false;
  // currentIndex = 0;
  // onSelectImage(index: number) {
  //   this.fade = true;
  //   setTimeout(() => {
  //     this.currentIndex = index;
  //     this.fade = false;
  //   }, 200);
  // }
}
