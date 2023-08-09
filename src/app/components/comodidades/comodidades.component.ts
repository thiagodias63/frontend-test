import {Component, Input, OnInit} from '@angular/core';
import {Amenity} from 'src/app/entities/hotel/amenity';

@Component({
  selector: 'comodidades',
  templateUrl: './comodidades.component.html',
  styleUrls: ['./comodidades.component.css'],
})
export class ComodidadesComponent implements OnInit {
  @Input() comodidades: Amenity[] = [];
  @Input() comodidadesSecoes: number[] = [];
  @Input() mostrarNome = false;
  icons = new Map();
  constructor() {
    this.icons.set('WI_FI', '📶');
    this.icons.set('PARKING', '🅿️');
    this.icons.set('RESTAURANT', '👩‍🍳');
    this.icons.set('ROOM_SERVICE', '🧹');
    this.icons.set('MEETING_ROOM', '👥');
    this.icons.set('LAUNDRY', '👕');
    this.icons.set('PUB', '🍹');
    this.icons.set('POOL', '🏊');
    this.icons.set('PETS', '😸');
    this.icons.set('BREAKFAST', '🍞');
    this.icons.set('FITNESS_CENTER', '🏋');
    this.icons.set('STEAM_ROOM', '🎬');
    this.icons.set('AIR_CONDITIONING', '❄️');
    this.icons.set('SAFE', '🛡');
    this.icons.set('ROOM_TV', '📺');
    this.icons.set('RECEPTION_24_HOURS', '🕒');
    this.icons.set('MASSAGE', '💆');
    this.icons.set('STAGE', '🎭');
    this.icons.set('AUDITORIUM', '🎤');
  }

  ngOnInit(): void {
    if (this.mostrarNome) {
      for (let i = 0; i < this.comodidades.length / 4; i++) {
        this.comodidadesSecoes.push(i);
      }
    }
  }
}
