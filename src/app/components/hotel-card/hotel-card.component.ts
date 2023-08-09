import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {alterarHotelSelecionadoAction} from 'src/app/buscar-hoteis/store/buscar-hoteis.actions';
import {Hotel} from 'src/app/entities/hotel/hotel';
import * as fromApp from 'src/app/store/app.reducer';

@Component({
  selector: 'hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css'],
})
export class HotelCardComponent {
  @Input() hotel: Hotel | null = null;

  constructor(private store: Store<fromApp.AppState>) {}

  selecionarHotel() {
    this.store.dispatch(alterarHotelSelecionadoAction({hotelSelecionado: this.hotel}));
  }
}
