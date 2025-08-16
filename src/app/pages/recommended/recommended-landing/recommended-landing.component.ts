import { Component, inject, OnInit } from '@angular/core';

import { RoomCardComponent } from '../../../shared/components/room-card/room-card.component';
import { IRoom } from '../../../shared/interfaces/room.interface';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'app-recommended-landing',
  standalone: true,
  imports: [RoomCardComponent],
  templateUrl: './recommended-landing.component.html',
  styleUrl: './recommended-landing.component.scss',
})
export class RecommendedLandingComponent implements OnInit {
  readonly #apiService = inject(ApiService);

  rooms: IRoom[] = [];

  ngOnInit() {
    this.#apiService.getRooms().subscribe((data) => {
      this.rooms = data;
    });
  }
}
