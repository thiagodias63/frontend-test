import {TestBed} from '@angular/core/testing';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, appReducer} from 'src/app/store/app.reducer';
import {BuscarHoteisModule} from '../../buscar-hoteis/buscar-hoteis.module';
import {FormularioBuscarReservaComponent} from './formulario-buscar-reserva.component';
import {NzAutocompleteOptionComponent} from 'ng-zorro-antd/auto-complete';
import {destinosMock} from 'src/tests/mocks/destinos';
import {alterarFiltroDestinoAction} from 'src/app/buscar-hoteis/store/buscar-hoteis.actions';

describe('FormularioBuscarReserva', () => {
  let fixture;
  let component: FormularioBuscarReservaComponent;
  let store: Store<AppState>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarHoteisModule, StoreModule.forRoot(appReducer)],
      declarations: [FormularioBuscarReservaComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(FormularioBuscarReservaComponent);
    component = fixture.componentInstance;
    component.destinos = destinosMock;
    store = TestBed.inject(Store);
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  describe('#aoAlterarDestino', () => {
    it('deve não alterar o destino caso não tenha sido selecionado um valor', () => {
      spyOn(component.buscarReservaForm.controls.destino, 'setValue').calls.reset();
      component.aoAlterarDestino({nzValue: ''} as NzAutocompleteOptionComponent);
      expect(component.buscarReservaForm.controls.destino.setValue).not.toHaveBeenCalled();
    });

    it('deve alterar o destino caso tenha sido selecionado um valor', () => {
      spyOn(component.buscarReservaForm.controls.destino, 'setValue').calls.reset();
      component.aoAlterarDestino({nzValue: 'Belo Horizonte, Minas Gerais'} as NzAutocompleteOptionComponent);
      expect(component.buscarReservaForm.controls.destino.setValue).toHaveBeenCalled();
    });
  });

  describe('#aoBuscar', () => {
    it('deve não enviar caso o destino não esteja preenchido', () => {
      spyOn(store, 'dispatch').calls.reset();
      component.buscarReservaForm.controls.destino.setValue('');
      component.aoBuscar();
      expect(store.dispatch).not.toHaveBeenCalled();
    });

    it('deve não enviar caso o destino preenchido não seja válido', () => {
      spyOn(store, 'dispatch').calls.reset();
      component.buscarReservaForm.controls.destino.setValue('Belo Horizonte, SP');
      component.aoBuscar();
      expect(store.dispatch).not.toHaveBeenCalled();
    });

    it('deve enviar caso o destino seja preenchido com um destino válido', () => {
      spyOn(store, 'dispatch').calls.reset();
      component.buscarReservaForm.controls.destino.setValue('Belo Horizonte, MG');
      component.aoBuscar();
      expect(store.dispatch).toHaveBeenCalled();
    });

    it('deve alterar o texto do botão buscar para "Alterar Busca"', () => {
      spyOn(store, 'dispatch').calls.reset();
      component.buscarReservaForm.controls.destino.setValue('Belo Horizonte, MG');
      component.aoBuscar();
      expect(component.textoBotaoBuscar).toEqual('Alterar Busca');
    });
  });
});
