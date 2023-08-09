import {Component, Input, OnInit} from '@angular/core';
import {Amenity} from 'src/app/entities/hotel/amenity';

@Component({
  selector: 'comodidades',
  template: `
    <div *ngIf="mostrarNome" ngClass="comodidades__container---com-titulo">
      <ng-container *ngFor="let secao of comodidadesSecoes">
        <ng-container *ngFor="let comodidade of comodidades.slice(secao * 4, secao * 4 + 4)">
          <span class="comodidade__titulo" *ngIf="mostrarNome">
            <span>{{ icons.get(comodidade.key) }}</span>
            {{ comodidade.label }}
          </span>
        </ng-container>
      </ng-container>
    </div>
    <div *ngIf="!mostrarNome" class="comodidades__container">
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
      .comodidades__container---com-titulo {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 15px;
        justify-content: space-between;
        min-width: 770px;
        font-size: 0.75rem;
      }
      .comodidade__titulo {
        display: inline-flex;
        gap: 3px;
      }
    `,
  ],
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
