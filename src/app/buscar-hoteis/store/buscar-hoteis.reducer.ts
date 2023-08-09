import {createReducer, on} from '@ngrx/store';
import {Place} from 'src/app/entities/place/place';
import {
  alterarDestinosAction,
  alterarFiltroDestinoAction,
  alterarHoteisActions,
  alterarOrganizarPorAction,
  alterarPaginaAtualAction,
  alterarSemHoteisAction,
} from './buscar-hoteis.actions';
import {Hotel} from 'src/app/entities/hotel/hotel';
import {organizarPorOpcoes} from 'src/app/entities/core/organizar-por';

export interface State {
  filtroDestino: Place | null;
  nomeHotel: string;
  destinos: Place[];
  hoteis: Hotel[];
  mostrarOrganizadoPor: boolean;
  organizarPorSelecionado: organizarPorOpcoes;
  carregandoHoteis: boolean;
  semHoteis: boolean;
  paginaAtual: number;
}

const initialState: State = {
  filtroDestino: null,
  nomeHotel: '',
  destinos: [],
  hoteis: [],
  mostrarOrganizadoPor: false,
  organizarPorSelecionado: 'Recomendados',
  carregandoHoteis: false,
  semHoteis: false,
  paginaAtual: 0,
};

export const buscarHoteisReducer = createReducer(
  initialState,
  on(alterarDestinosAction, (state, action) => {
    return {...state, destinos: action.destinos};
  }),
  on(alterarFiltroDestinoAction, (state, action) => {
    return {...state, filtroDestino: action.filtroDestino, nomeHotel: action.nomeHotel, hoteis: [], paginaAtual: 0, carregandoHoteis: true};
  }),
  on(alterarHoteisActions, (state, action) => {
    const newHoteis = state.hoteis.concat(action.hoteis);
    return {...state, hoteis: newHoteis, mostrarOrganizadoPor: true, carregandoHoteis: false};
  }),
  on(alterarOrganizarPorAction, (state, action) => {
    return {...state, organizarPorSelecionado: action.novoFiltro, hoteis: [], paginaAtual: 0, carregandoHoteis: true};
  }),
  on(alterarSemHoteisAction, (state, action) => {
    return {...state, semHoteis: action.semHoteis};
  }),
  on(alterarPaginaAtualAction, (state) => {
    return {...state, paginaAtual: state.paginaAtual + 10, carregandoHoteis: true};
  })
);
