import {TestBed} from '@angular/core/testing';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, appReducer} from 'src/app/store/app.reducer';
import {BuscarHoteisComponent} from './buscar-hoteis.component';
import {BuscarHoteisModule} from './buscar-hoteis.module';

describe('BuscarHoteisComponent', () => {
  let fixture;
  let component: BuscarHoteisComponent;
  let store: Store<AppState>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarHoteisModule, StoreModule.forRoot(appReducer)],
      declarations: [BuscarHoteisComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(BuscarHoteisComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  describe('#aoArrastarParaBaixo', () => {
    it('deve atualizar a página atual', () => {
      spyOn(store, 'dispatch');
      component.aoArrastarParaBaixo();
      expect(store.dispatch).toHaveBeenCalled();
    });
  });
});
