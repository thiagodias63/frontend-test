import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {alterarHotelSelecionadoAction} from 'src/app/buscar-hoteis/store/buscar-hoteis.actions';
import {Hotel} from 'src/app/entities/hotel/hotel';
import * as fromApp from 'src/app/store/app.reducer';

@Component({
  selector: 'hotel-card',
  template: `
    <nz-card *ngIf="hotel">
      <div class="hotel-card__grid">
        <div>
          <nz-carousel nzEffect="scrollx">
            <!-- <div nz-carousel-content *ngFor="let image of hotel.images">
              <div [ngStyle]="{backgroundImage: 'url(' + image + ')'}" class="hotel-card__image"></div>
            </div> -->
          </nz-carousel>
        </div>
        <hotel-card-secao-informacoes
          [nome]="hotel.name"
          [descricao]="hotel.description"
          [avaliacao]="hotel.stars"
          [comodidades]="hotel.amenities"
          [reembolsavel]="hotel.hasRefundableRoom"
        />
        <div class="divisao"></div>
        <hotel-card-secao-valores (aoSelecionarHotel)="selecionarHotel()" />
      </div>
    </nz-card>
  `,
  styles: [
    `
      ::ng-deep hotel-card .ant-card-body {
        padding: 0;
        min-height: 255px;
        width: 100%;
      }
      .hotel-card__grid {
        display: grid;
        grid-template-columns: 34% 40% 0.5% 25.5%;
        min-height: 255px;
        width: 100%;
      }
      .hotel-card__grid > :first-child {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }
      .hotel-card__grid > :last-child {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
      }
      .divisao {
        background-color: var(--backgroundColor);
      }
      .hotel-card__image {
        background-size: cover;
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export class HotelCardComponent {
  @Input() hotel: Hotel | null = null;

  constructor(private store: Store<fromApp.AppState>) {}

  selecionarHotel() {
    this.store.dispatch(alterarHotelSelecionadoAction({hotelSelecionado: this.hotel}));
  }
}
