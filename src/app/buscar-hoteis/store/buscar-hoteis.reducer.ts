import {createReducer, on} from '@ngrx/store';
import {Place} from 'src/app/entities/place/place';
import {alterarDestinosAction} from './buscar-hoteis.actions';

export interface State {
  filtroDestino: string;
  destinos: Place[];
}

const initialState: State = {
  filtroDestino: '',
  destinos: [],
};

export const buscarHoteisReducer = createReducer(
  initialState,
  on(alterarDestinosAction, (state, action) => {
    return {...state, destinos: action.destinos};
  })
);
