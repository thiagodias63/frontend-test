import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {appReducer} from './store/app.reducer';
import {HeaderComponent} from './components/header/header.component';
import {BuscarHoteisModule} from './buscar-hoteis/buscar-hoteis.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, BuscarHoteisModule, StoreModule.forRoot(appReducer)],
      declarations: [AppComponent, HeaderComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('buscar-hoteis')).toBeTruthy();
  });
});
