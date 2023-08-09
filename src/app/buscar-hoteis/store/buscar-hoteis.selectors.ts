import {KeyValuePair} from 'src/app/entities/core/key-value';
import * as fromApp from 'src/app/store/app.reducer';

export const destionosOpcoes = (state: fromApp.AppState): KeyValuePair[] =>
  state.buscarHoteis.destinos.map((destino) => {
    return {
      value: `${destino.name}, ${destino.state.name}`,
      key: `${destino.name}, ${destino.state.shortname}`,
    };
  });
