import {TestBed} from '@angular/core/testing';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, appReducer} from 'src/app/store/app.reducer';
import {BuscarHoteisModule} from '../../buscar-hoteis/buscar-hoteis.module';
import {alterarOrganizarPorAction} from 'src/app/buscar-hoteis/store/buscar-hoteis.actions';
import {OrganizarListagemReservasComponent} from './organizar-listagem-reservas.component';
import {organizarPorOpcoes} from 'src/app/entities/core/organizar-por';

describe('OrganizarListagemReservasComponent', () => {
  let fixture;
  let component: OrganizarListagemReservasComponent;
  let store: Store<AppState>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarHoteisModule, StoreModule.forRoot(appReducer)],
      declarations: [OrganizarListagemReservasComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(OrganizarListagemReservasComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  describe('#alterarOrganizarPor', () => {
    it('deve alterar o hotel selecionado', () => {
      spyOn(store, 'dispatch');
      const novaOrganizacao: organizarPorOpcoes = 'Melhor Avaliados';
      component.alterarOrganizarPor(novaOrganizacao);
      expect(store.dispatch).toHaveBeenCalledWith(alterarOrganizarPorAction({novoFiltro: novaOrganizacao}));
    });
  });
});
