import { Component } from '@angular/core';

import { RoomCardComponent } from '../../../shared/components/room-card/room-card.component';
import { mocksRooms } from '../../../shared/mocks/mocks-room';

@Component({
  selector: 'app-recommended-landing',
  standalone: true,
  imports: [RoomCardComponent],
  templateUrl: './recommended-landing.component.html',
  styleUrl: './recommended-landing.component.scss',
})
export class RecommendedLandingComponent {
  rooms = mocksRooms;
}
