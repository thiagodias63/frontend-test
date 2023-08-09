import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {Observable, filter, find, map, of, switchMap, tap, withLatestFrom} from 'rxjs';
import {Injectable} from '@angular/core';
import * as fromApp from 'src/app/store/app.reducer';
import {
  alterarDestinosAction,
  alterarFiltroDestinoAction,
  alterarHoteisActions,
  alterarOrganizarPorAction,
  alterarSemHoteisAction,
  iniciarCarregamentoDeDestinosAction,
} from './buscar-hoteis.actions';
import {HttpClient} from '@angular/common/http';
import {Place} from 'src/app/entities/place/place';
import {Hotel} from 'src/app/entities/hotel/hotel';
import {organizarPorOpcoes} from 'src/app/entities/core/organizar-por';

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
        ofType(alterarFiltroDestinoAction, alterarOrganizarPorAction),
        withLatestFrom(
          this.store.select('buscarHoteis').pipe(
            map((buscarHoteisState): {filtroDestino: Place | null; organizarPorSelecionado: organizarPorOpcoes} => {
              return {
                filtroDestino: buscarHoteisState.filtroDestino,
                organizarPorSelecionado: buscarHoteisState.organizarPorSelecionado,
              };
            })
          )
        ),
        switchMap(
          ([_, buscarHoteisState]): Observable<Hotel[]> =>
            this.http.get<HotelResponse[]>('assets/hotel.json').pipe(
              map((hoteis: HotelResponse[]): HotelResponse | undefined => {
                return hoteis.find((hotel: HotelResponse) => {
                  return hotel.placeId === buscarHoteisState.filtroDestino?.placeId;
                });
              }),
              map(
                (response: HotelResponse | undefined): Hotel[] =>
                  response?.hotels.sort((a: Hotel, b: Hotel) => {
                    const parametroDeComparacao = buscarHoteisState.organizarPorSelecionado === 'Recomendados' ? 'name' : 'stars';
                    const ordenacao = buscarHoteisState.organizarPorSelecionado === 'Recomendados' ? 1 : -1;
                    if (a[parametroDeComparacao] < b[parametroDeComparacao]) return -1 * ordenacao;
                    if (a[parametroDeComparacao] > b[parametroDeComparacao]) return 1 * ordenacao;
                    return 0;
                  }) || []
              )
            )
        ),
        switchMap((response: Hotel[]) => of(alterarHoteisActions({hoteis: response}), alterarSemHoteisAction({semHoteis: !response.length})))
      ),
    {dispatch: true}
  );

  constructor(private http: HttpClient, private actions$: Actions, private store: Store<fromApp.AppState>) {}
}

interface HotelResponse {
  hotels: Hotel[];
  placeId: number;
}
