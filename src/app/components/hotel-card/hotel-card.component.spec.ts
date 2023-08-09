import {TestBed} from '@angular/core/testing';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, appReducer} from 'src/app/store/app.reducer';
import {BuscarHoteisModule} from '../../buscar-hoteis/buscar-hoteis.module';
import {HotelCardComponent} from './hotel-card.component';
import {alterarHotelSelecionadoAction} from 'src/app/buscar-hoteis/store/buscar-hoteis.actions';
import {hotelMock} from 'src/tests/mocks/hotel';

describe('HotelCardComponent', () => {
  let fixture;
  let component: HotelCardComponent;
  let store: Store<AppState>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarHoteisModule, StoreModule.forRoot(appReducer)],
      declarations: [HotelCardComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(HotelCardComponent);
    component = fixture.componentInstance;
    component.hotel = hotelMock;
    store = TestBed.inject(Store);
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  describe('#selecionarHotel', () => {
    it('deve alterar o hotel selecionado', () => {
      spyOn(store, 'dispatch');
      component.selecionarHotel();
      expect(store.dispatch).toHaveBeenCalledWith(alterarHotelSelecionadoAction({hotelSelecionado: component.hotel}));
    });
  });
});
