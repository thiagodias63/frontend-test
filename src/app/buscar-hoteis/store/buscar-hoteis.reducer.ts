import {createReducer, on} from '@ngrx/store';
import {Place} from 'src/app/entities/place/place';
import {
  alterarDestinosAction,
  alterarFiltroDestinoAction,
  alterarHoteisActions,
  alterarHotelSelecionadoAction,
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
  hotelSelecionado: Hotel | null;
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
  hotelSelecionado: {
    deals: null,
    id: 29613,
    favorite: false,
    name: 'Baia Cabrália Hotel.',
    description:
      'O Baía Cabrália possui a melhor infra-estrutura da Costa do Descobrimento para abrigar grandes eventos e convenções e se destaca também pelo conforto, praticidade e excelente atendimento, recebendo quem vem à região a lazer ou negócios.\r',
    stars: '4',
    thumb: 'https://media.omnibees.com/Images/3164/Property/188807.jpg',
    amenities: [
      {
        key: 'MEETING_ROOM',
        label: 'Sala para Reuniões / Eventos',
      },
      {
        key: 'ROOM_TV',
        label: 'Sala de tv',
      },
      {
        key: 'RECEPTION_24_HOURS',
        label: 'Recepção 24 horas',
      },
      {
        key: 'PARKING',
        label: 'Estacionamento',
      },
      {
        key: 'PUB',
        label: 'Bar',
      },
      {
        key: 'RESTAURANT',
        label: 'Restaurante',
      },
      {
        key: 'POOL',
        label: 'Piscina',
      },
      {
        key: 'POOL',
        label: 'Piscina',
      },
      {
        key: 'MEETING_ROOM',
        label: 'Sala para Reuniões / Eventos',
      },
      {
        key: 'STAGE',
        label: 'Palco',
      },
      {
        key: 'AUDITORIUM',
        label: 'Auditório',
      },
      {
        key: 'STEAM_ROOM',
        label: 'Sauna',
      },
      {
        key: 'MASSAGE',
        label: 'Massagens',
      },
    ],
    hasBreakFast: true,
    hasRefundableRoom: true,
    hasAgreement: false,
    nonRefundable: false,
    address: {
      street: 'Rua Sidrack Carvalho',
      number: '141',
      district: '',
      city: 'Porto Seguro',
      state: 'BAHIA',
      country: 'BRASIL',
      zipCode: '',
      fullAddress: 'Rua Sidrack Carvalho, 141 - ',
    },
    images: [
      'https://media.omnibees.com/Images/3164/Property/188807.jpg',
      'https://media.omnibees.com/Images/3164/Property/188932.jpg',
      'https://media.omnibees.com/Images/3164/Property/188935.jpg',
      'https://media.omnibees.com/Images/3164/Property/189596.jpg',
      'https://media.omnibees.com/Images/3164/Property/587767.jpg',
      'https://media.omnibees.com/Images/3164/Property/587768.jpg',
      'https://media.omnibees.com/Images/3164/Property/587769.jpg',
      'https://media.omnibees.com/Images/3164/Property/587770.jpg',
      'https://media.omnibees.com/Images/3164/Property/587771.jpg',
      'https://media.omnibees.com/Images/3164/Property/587772.jpg',
      'https://media.omnibees.com/Images/3164/Property/587773.jpg',
      'https://media.omnibees.com/Images/3164/Property/587774.jpg',
      'https://media.omnibees.com/Images/3164/Property/587775.jpg',
      'https://media.omnibees.com/Images/3164/Property/587776.jpg',
      'https://media.omnibees.com/Images/3164/Property/587777.jpg',
      'https://media.omnibees.com/Images/3164/Property/587778.jpg',
      'https://media.omnibees.com/Images/3164/Property/587779.jpg',
      'https://media.omnibees.com/Images/3164/Property/587780.jpg',
      'https://media.omnibees.com/Images/3164/Property/587781.jpg',
      'https://media.omnibees.com/Images/3164/Property/587787.jpg',
      'https://media.omnibees.com/Images/3164/Property/587788.jpg',
      'https://media.omnibees.com/Images/3164/Property/587789.jpg',
      'https://media.omnibees.com/Images/3164/Property/587790.jpg',
      'https://media.omnibees.com/Images/3164/Property/587791.jpg',
      'https://media.omnibees.com/Images/3164/Property/587792.jpg',
      'https://media.omnibees.com/Images/3164/Property/587793.jpg',
      'https://media.omnibees.com/Images/3164/Property/587794.jpg',
      'https://media.omnibees.com/Images/3164/Property/587808.jpg',
      'https://media.omnibees.com/Images/3164/Property/587809.jpg',
      'https://media.omnibees.com/Images/3164/Property/587810.jpg',
      'https://media.omnibees.com/Images/3164/Property/587811.jpg',
      'https://media.omnibees.com/Images/3164/Property/587812.jpg',
      'https://media.omnibees.com/Images/3164/Property/644534.jpg',
      'https://media.omnibees.com/Images/3164/Property/644535.jpg',
      'https://media.omnibees.com/Images/3164/Property/644536.jpg',
      'https://media.omnibees.com/Images/3164/Property/644537.jpg',
    ],
    roomsQuantity: 1,
  },
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
  }),
  on(alterarHotelSelecionadoAction, (state, action) => {
    return {...state, hotelSelecionado: action.hotelSelecionado};
  })
);
