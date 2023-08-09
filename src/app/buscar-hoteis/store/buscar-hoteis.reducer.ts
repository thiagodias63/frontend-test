import {createReducer, on} from '@ngrx/store';
import {Place} from 'src/app/entities/place/place';
import {
  alterarDestinosAction,
  alterarFiltroDestinoAction,
  alterarHoteisActions,
  alterarOrganizarPorAction,
  alterarSemHoteisAction,
} from './buscar-hoteis.actions';
import {Hotel} from 'src/app/entities/hotel/hotel';
import {organizarPorOpcoes} from 'src/app/entities/core/organizar-por';

export interface State {
  filtroDestino: Place | null;
  destinos: Place[];
  hoteis: Hotel[];
  mostrarOrganizadoPor: boolean;
  organizarPorSelecionado: organizarPorOpcoes;
  carregandoHoteis: boolean;
  semHoteis: boolean;
}

const initialState: State = {
  filtroDestino: null,
  destinos: [],
  hoteis: [],
  mostrarOrganizadoPor: false,
  organizarPorSelecionado: 'Recomendados',
  carregandoHoteis: false,
  semHoteis: false,
};

export const buscarHoteisReducer = createReducer(
  initialState,
  on(alterarDestinosAction, (state, action) => {
    return {...state, destinos: action.destinos};
  }),
  on(alterarFiltroDestinoAction, (state, action) => {
    return {...state, filtroDestino: action.filtroDestino, carregandoHoteis: true};
  }),
  on(alterarHoteisActions, (state, action) => {
    return {...state, hoteis: action.hoteis, mostrarOrganizadoPor: true, carregandoHoteis: false};
  }),
  on(alterarOrganizarPorAction, (state, action) => {
    return {...state, organizarPorSelecionado: action.novoFiltro, carregandoHoteis: true};
  }),
  on(alterarSemHoteisAction, (state, action) => {
    return {...state, semHoteis: action.semHoteis};
  })
);
