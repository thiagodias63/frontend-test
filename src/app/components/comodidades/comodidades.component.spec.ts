import {TestBed} from '@angular/core/testing';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, appReducer} from 'src/app/store/app.reducer';
import {BuscarHoteisModule} from '../../buscar-hoteis/buscar-hoteis.module';
import {ComodidadesComponent} from './comodidades.component';

describe('ComodidadesComponent', () => {
  let fixture;
  let component: ComodidadesComponent;
  let store: Store<AppState>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarHoteisModule, StoreModule.forRoot(appReducer)],
      declarations: [ComodidadesComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ComodidadesComponent);
    component = fixture.componentInstance;

    store = TestBed.inject(Store);
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('deve criar uma sessão a cada quatro comodidades', () => {
      component.comodidades = [
        {
          key: 'RECEPTION_24_HOURS',
          label: 'Recepção 24 horas',
        },
        {
          key: 'RECEPTION_24_HOURS',
          label: 'Recepção 24 horas',
        },
        {
          key: 'RECEPTION_24_HOURS',
          label: 'Recepção 24 horas',
        },
        {
          key: 'RECEPTION_24_HOURS',
          label: 'Recepção 24 horas',
        },
        {
          key: 'RECEPTION_24_HOURS',
          label: 'Recepção 24 horas',
        },
        {
          key: 'RECEPTION_24_HOURS',
          label: 'Recepção 24 horas',
        },
        {
          key: 'RECEPTION_24_HOURS',
          label: 'Recepção 24 horas',
        },
        {
          key: 'RECEPTION_24_HOURS',
          label: 'Recepção 24 horas',
        },
      ];
      component.mostrarNome = true;
      component.ngOnInit();
      expect(component.comodidadesSecoes.length).toEqual(2);
    });
  });
});
