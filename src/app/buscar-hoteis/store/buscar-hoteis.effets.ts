import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {Observable, of, switchMap, tap} from 'rxjs';
import {Injectable} from '@angular/core';
import * as fromApp from 'src/app/store/app.reducer';
import {alterarDestinosAction, iniciarCarregamentoDeDestinosAction} from './buscar-hoteis.actions';
import {HttpClient} from '@angular/common/http';
import {Place} from 'src/app/entities/place/place';

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

  constructor(private http: HttpClient, private actions$: Actions, private store: Store<fromApp.AppState>) {}
}
