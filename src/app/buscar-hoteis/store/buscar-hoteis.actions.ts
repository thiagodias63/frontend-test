import {createAction, props} from '@ngrx/store';
import {Place} from 'src/app/entities/place/place';

export const iniciarCarregamentoDeDestinosAction = createAction('[Buscar Hoteis] Iniciar carregamento de destinos');

export const alterarDestinosAction = createAction('[Buscar Hoteis] Alterar destinos', props<{destinos: Place[]}>());
