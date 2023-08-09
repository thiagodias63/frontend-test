import {TestBed} from '@angular/core/testing';
import {ReservarHotelCardComponent} from './reservar-hotel-card.component';
import {BuscarHoteisModule} from 'src/app/buscar-hoteis/buscar-hoteis.module';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, appReducer} from 'src/app/store/app.reducer';

describe('ReservarHotelCardComponent', () => {
  let fixture;
  let component: ReservarHotelCardComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarHoteisModule, StoreModule.forRoot(appReducer)],
      declarations: [ReservarHotelCardComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ReservarHotelCardComponent);
    component = fixture.componentInstance;
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });
});
