import * as fromApp from 'src/app/store/app.reducer';

export const nomesDestinos = (state: fromApp.AppState) => state.buscarHoteis.destinos.map((destino) => `${destino.name}, ${destino.state.name}`);
