import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, map} from 'rxjs';
import {Hotel} from '../entities/hotel/hotel';
import * as fromApp from 'src/app/store/app.reducer';
import {alterarPaginaAtualAction} from './store/buscar-hoteis.actions';

@Component({
  selector: 'buscar-hoteis',
  templateUrl: './buscar-hoteis.component.html',
  styleUrls: ['./buscar-hoteis.component.css'],
})
export class BuscarHoteisComponent {
  vm$: Observable<{hoteis: Hotel[]; carregandoHoteis: boolean; semHoteis: boolean}>;
  constructor(private store: Store<fromApp.AppState>) {
    this.vm$ = this.store.select('buscarHoteis').pipe(
      map((buscarHoteisState) => {
        return {hoteis: buscarHoteisState.hoteis, carregandoHoteis: buscarHoteisState.carregandoHoteis, semHoteis: buscarHoteisState.semHoteis};
      })
    );
  }

  aoArrastarParaBaixo(): void {
    this.store.dispatch(alterarPaginaAtualAction());
  }
}
