import {TestBed} from '@angular/core/testing';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, appReducer} from 'src/app/store/app.reducer';
import {
  alterarDestinosAction,
  alterarFiltroDestinoAction,
  alterarHoteisActions,
  alterarOrganizarPorAction,
  alterarPaginaAtualAction,
  alterarSemHoteisAction,
} from './buscar-hoteis.actions';
import {destinosMock} from 'src/tests/mocks/destinos';
import {destionosOpcoes} from './buscar-hoteis.selectors';
import {hotelMock} from 'src/tests/mocks/hotel';

describe('BuscarHoteisStore', () => {
  let store: Store<AppState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(appReducer)],
    });

    store = TestBed.inject(Store);
  });

  describe('#alterarDestinosAction', () => {
    it('deve retornar um chave/valor para cada destino', (done) => {
      store.dispatch(alterarDestinosAction({destinos: destinosMock}));
      store.select(destionosOpcoes).subscribe((destionosOpcoes) => {
        expect(destionosOpcoes[0]).toEqual({key: 'Belo Horizonte, MG', value: 'Belo Horizonte, Minas Gerais'});
        done();
      });
    });
  });

  describe('#alterarFiltroDestinoAction', () => {
    it('deve alterar o filtro de destino e de nome para os recebidos, zerar os hoteis, zerar a página atual, não mostrar "sem hoteis" e começar a carregar os hoteis', (done) => {
      store.dispatch(alterarFiltroDestinoAction({filtroDestino: destinosMock[0], nomeHotel: 'nomeHotel'}));
      store.select('buscarHoteis').subscribe((buscarHoteisStore) => {
        expect(buscarHoteisStore.filtroDestino).toEqual(destinosMock[0]);
        expect(buscarHoteisStore.nomeHotel).toEqual('nomeHotel');
        expect(buscarHoteisStore.hoteis.length).toEqual(0);
        expect(buscarHoteisStore.paginaAtual).toEqual(0);
        expect(buscarHoteisStore.semHoteis).toEqual(false);
        expect(buscarHoteisStore.carregandoHoteis).toEqual(true);
        done();
      });
    });
  });

  describe('#alterarHoteisActions', () => {
    it('deve adicionar os hoteis ao final, mostrar o "organizar por" e parar de carregar os hoteis', (done) => {
      store.dispatch(alterarHoteisActions({hoteis: [hotelMock]}));
      store.select('buscarHoteis').subscribe((buscarHoteisStore) => {
        expect(buscarHoteisStore.hoteis.length).toEqual(1);
        expect(buscarHoteisStore.mostrarOrganizadoPor).toEqual(true);
        expect(buscarHoteisStore.carregandoHoteis).toEqual(false);
        done();
      });
    });
  });

  describe('#alterarOrganizarPorAction', () => {
    it('deve alterar o "organizar por", zerar os hoteis e a página atual e começar a carregar os hoteis', (done) => {
      store.dispatch(alterarOrganizarPorAction({novoFiltro: 'Melhor Avaliados'}));
      store.select('buscarHoteis').subscribe((buscarHoteisStore) => {
        expect(buscarHoteisStore.organizarPorSelecionado).toEqual('Melhor Avaliados');
        expect(buscarHoteisStore.hoteis.length).toEqual(0);
        expect(buscarHoteisStore.carregandoHoteis).toEqual(true);
        done();
      });
    });
  });

  describe('#alterarSemHoteisAction', () => {
    it('deve alterar se está "sem hoteis"', (done) => {
      store.dispatch(alterarSemHoteisAction({semHoteis: true}));
      store.select('buscarHoteis').subscribe((buscarHoteisStore) => {
        expect(buscarHoteisStore.semHoteis).toEqual(true);
        done();
      });
    });
  });

  describe('#alterarPaginaAtualAction', () => {
    it('deve alterar a página atual para a próxima e começar a carregar hoteis', (done) => {
      store.dispatch(alterarPaginaAtualAction());
      store.select('buscarHoteis').subscribe((buscarHoteisStore) => {
        expect(buscarHoteisStore.paginaAtual).toEqual(1);
        done();
      });
    });
  });
});
