import {createAction, props} from '@ngrx/store';
import {organizarPorOpcoes} from 'src/app/entities/core/organizar-por';
import {Hotel} from 'src/app/entities/hotel/hotel';
import {Place} from 'src/app/entities/place/place';

export const iniciarCarregamentoDeDestinosAction = createAction('[Buscar Hoteis] Iniciar carregamento de destinos');

export const alterarDestinosAction = createAction('[Buscar Hoteis] Alterar destinos', props<{destinos: Place[]}>());

export const alterarFiltroDestinoAction = createAction('[Buscar Hoteis] Alterar filtro destino', props<{filtroDestino: Place; nomeHotel: string}>());

export const alterarHoteisActions = createAction('[Buscar Hoteis] Alterar hoteis', props<{hoteis: Hotel[]}>());

export const alterarOrganizarPorAction = createAction('[Buscar Hoteis] Alterar organizado por', props<{novoFiltro: organizarPorOpcoes}>());

export const alterarSemHoteisAction = createAction('[Buscar Hoteis] Alterar sem hoteis', props<{semHoteis: boolean}>());

export const alterarPaginaAtualAction = createAction('[Buscar Hoteis] Alterar pagina atual');

export const alterarHotelSelecionadoAction = createAction('[Buscar Hoteis] Alterar hotel selecionado', props<{hotelSelecionado: Hotel | null}>());
