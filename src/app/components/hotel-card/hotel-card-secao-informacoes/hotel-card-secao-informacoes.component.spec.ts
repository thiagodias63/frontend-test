import {TestBed} from '@angular/core/testing';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, appReducer} from 'src/app/store/app.reducer';
import {BuscarHoteisModule} from '../../../buscar-hoteis/buscar-hoteis.module';
import {HotelCardSecaoInformacoesComponent} from './hotel-card-secao-informacoes.component';

describe('HotelCardSecaoInformacoesComponent', () => {
  let fixture;
  let component: HotelCardSecaoInformacoesComponent;
  let store: Store<AppState>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarHoteisModule, StoreModule.forRoot(appReducer)],
      declarations: [HotelCardSecaoInformacoesComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(HotelCardSecaoInformacoesComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });
});
