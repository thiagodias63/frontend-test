import {createReducer, on} from '@ngrx/store';
import {Place} from 'src/app/entities/place/place';
import {alterarDestinosAction, alterarFiltroDestinoAction, alterarHoteisActions} from './buscar-hoteis.actions';
import {Hotel} from 'src/app/entities/hotel/hotel';

export interface State {
  filtroDestino: Place | null;
  destinos: Place[];
  hoteis: Hotel[];
}

const initialState: State = {
  filtroDestino: null,
  destinos: [],
  hoteis: [],
};

export const buscarHoteisReducer = createReducer(
  initialState,
  on(alterarDestinosAction, (state, action) => {
    return {...state, destinos: action.destinos};
  }),
  on(alterarFiltroDestinoAction, (state, action) => {
    return {...state, filtroDestino: action.filtroDestino};
  }),
  on(alterarHoteisActions, (state, action) => {
    return {...state, hoteis: action.hoteis};
  })
);
