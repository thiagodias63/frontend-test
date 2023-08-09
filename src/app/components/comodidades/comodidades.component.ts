import {Component, Input} from '@angular/core';
import {Amenity} from 'src/app/entities/hotel/amenity';

@Component({
  selector: 'comodidades',
  template: `
    <div class="comodidades__container">
      <ng-container *ngFor="let comodidade of comodidades">
        <span [title]="comodidade.label">{{ icons.get(comodidade.key) }}</span>
      </ng-container>
    </div>
  `,
  styles: [
    `
      .comodidades__container {
        display: inline-flex;
        gap: 3px;
      }
    `,
  ],
})
export class ComodidadesComponent {
  @Input() comodidades: Amenity[] = [];
  @Input() mostrarNome = false;
  @Input() mostrarResumido = false;
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
  }
}
