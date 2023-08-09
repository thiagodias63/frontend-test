import {TestBed} from '@angular/core/testing';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, appReducer} from 'src/app/store/app.reducer';
import {BuscarHoteisModule} from '../../buscar-hoteis/buscar-hoteis.module';
import {HotelDrawerComponent} from './hotel-drawer.component';
import {alterarHotelSelecionadoAction} from 'src/app/buscar-hoteis/store/buscar-hoteis.actions';

describe('HotelDrawerComponent', () => {
  let fixture;
  let component: HotelDrawerComponent;
  let store: Store<AppState>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarHoteisModule, StoreModule.forRoot(appReducer)],
      declarations: [HotelDrawerComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(HotelDrawerComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  describe('#aoMostrarTodasComodidades', () => {
    it('deve mostrar as comodidades', () => {
      component.mostrarTodasComodidades = false;
      component.aoMostrarTodasComodidades();
      expect(component.mostrarTodasComodidades).toEqual(true);
    });
  });

  describe('#aoFechar', () => {
    it('deve alterar voltar a esconder as comodidades', () => {
      component.mostrarTodasComodidades = true;
      component.aoFechar();
      expect(component.mostrarTodasComodidades).toEqual(false);
    });

    it('deve alterar selecionar o hotel', () => {
      spyOn(store, 'dispatch');
      component.aoFechar();
      expect(store.dispatch).toHaveBeenCalledWith(alterarHotelSelecionadoAction({hotelSelecionado: null}));
    });
  });
});
