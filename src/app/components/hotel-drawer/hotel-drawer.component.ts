import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, map} from 'rxjs';
import {alterarHotelSelecionadoAction} from 'src/app/buscar-hoteis/store/buscar-hoteis.actions';
import {Hotel} from 'src/app/entities/hotel/hotel';
import * as fromApp from 'src/app/store/app.reducer';

@Component({
  selector: 'hotel-drawer',
  templateUrl: './hotel-drawer.component.html',
  styleUrls: ['./hotel-drawer.component.css'],
})
export class HotelDrawerComponent {
  hotelSelecionado$: Observable<Hotel | null>;
  mostrarTodasComodidades = false;

  constructor(private store: Store<fromApp.AppState>) {
    this.hotelSelecionado$ = this.store.select('buscarHoteis').pipe(map((buscarHoteisState) => buscarHoteisState.hotelSelecionado));
  }

  aoMostrarTodasComodidades(): void {
    this.mostrarTodasComodidades = true;
  }

  aoFechar(): void {
    this.mostrarTodasComodidades = false;
    this.store.dispatch(alterarHotelSelecionadoAction({hotelSelecionado: null}));
  }
}
