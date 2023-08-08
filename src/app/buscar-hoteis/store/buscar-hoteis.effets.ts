import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {Observable, filter, find, map, of, switchMap, tap, withLatestFrom} from 'rxjs';
import {Injectable} from '@angular/core';
import * as fromApp from 'src/app/store/app.reducer';
import {alterarDestinosAction, alterarFiltroDestinoAction, alterarHoteisActions, iniciarCarregamentoDeDestinosAction} from './buscar-hoteis.actions';
import {HttpClient} from '@angular/common/http';
import {Place} from 'src/app/entities/place/place';
import {Hotel} from 'src/app/entities/hotel/hotel';

@Injectable()
export class BuscarHoteisEffects {
  carregarDestinosEffect = createEffect(
    () =>
      this.actions$.pipe(
        ofType(iniciarCarregamentoDeDestinosAction),
        switchMap((): Observable<Place[]> => this.http.get<Place[]>('assets/place.json')),
        tap((response: Place[]) => console.log(response)),
        switchMap((response: Place[]) => of(alterarDestinosAction({destinos: response})))
      ),
    {dispatch: true}
  );

  buscarHoteis = createEffect(
    () =>
      this.actions$.pipe(
        ofType(alterarFiltroDestinoAction),
        withLatestFrom(this.store.select('buscarHoteis').pipe(map((buscarHoteisState) => buscarHoteisState.filtroDestino))),
        // tap(([_, filtroDestino]) => console.log(filtroDestino?.placeId)),
        switchMap(
          ([_, filtroDestino]): Observable<HotelResponse | undefined> =>
            this.http.get<HotelResponse[]>('assets/hotel.json').pipe(
              map((hoteis: HotelResponse[]): HotelResponse | undefined => {
                return hoteis.find((hotel: HotelResponse) => {
                  return hotel.placeId === filtroDestino?.placeId;
                });
              })
            )
        ),
        tap((response) => console.log(response)),
        switchMap((response: HotelResponse | undefined) => of(alterarHoteisActions({hoteis: response?.hotels || []})))
      ),
    {dispatch: true}
  );

  constructor(private http: HttpClient, private actions$: Actions, private store: Store<fromApp.AppState>) {}
}

interface HotelResponse {
  hotels: Hotel[];
  placeId: number;
}
