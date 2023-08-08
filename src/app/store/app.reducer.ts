import {ActionReducerMap} from '@ngrx/store';
import * as fromBuscarHoteis from '../buscar-hoteis/store/buscar-hoteis.reducer';

export interface AppState {
  buscarHoteis: fromBuscarHoteis.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  buscarHoteis: fromBuscarHoteis.buscarHoteisReducer,
};
