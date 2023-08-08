import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from 'src/app/store/app.reducer';
import {iniciarCarregamentoDeDestinosAction} from './buscar-hoteis/store/buscar-hoteis.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private store: Store<fromApp.AppState>) {
    this.store.dispatch(iniciarCarregamentoDeDestinosAction());
  }
}
