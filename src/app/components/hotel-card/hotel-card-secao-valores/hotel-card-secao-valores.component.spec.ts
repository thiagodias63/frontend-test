import {TestBed} from '@angular/core/testing';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, appReducer} from 'src/app/store/app.reducer';
import {BuscarHoteisModule} from '../../../buscar-hoteis/buscar-hoteis.module';
import {HotelCardSecaoValoresComponent} from './hotel-card-secao-valores.component';

describe('HotelCardSecaoValoresComponent', () => {
  let fixture;
  let component: HotelCardSecaoValoresComponent;
  let store: Store<AppState>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarHoteisModule, StoreModule.forRoot(appReducer)],
      declarations: [HotelCardSecaoValoresComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(HotelCardSecaoValoresComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });
});
