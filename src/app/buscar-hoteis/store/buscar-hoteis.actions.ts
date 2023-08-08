import {createAction, props} from '@ngrx/store';
import {Hotel} from 'src/app/entities/hotel/hotel';
import {Place} from 'src/app/entities/place/place';

export const iniciarCarregamentoDeDestinosAction = createAction('[Buscar Hoteis] Iniciar carregamento de destinos');

export const alterarDestinosAction = createAction('[Buscar Hoteis] Alterar destinos', props<{destinos: Place[]}>());

export const alterarFiltroDestinoAction = createAction('[Buscar Hoteis] Alterar filtro destino', props<{filtroDestino: Place}>());

export const alterarHoteisActions = createAction('[Buscar Hoteis] Alterar hoteis', props<{hoteis: Hotel[]}>());
