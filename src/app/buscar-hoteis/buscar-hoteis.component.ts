import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, map} from 'rxjs';
import {Hotel} from '../entities/hotel/hotel';
import * as fromApp from 'src/app/store/app.reducer';

@Component({
  selector: 'buscar-hoteis',
  templateUrl: './buscar-hoteis.component.html',
  styleUrls: ['./buscar-hoteis.component.css'],
})
export class BuscarHoteisComponent {
  vm$: Observable<{hoteis: Hotel[]; carregandoHoteis: boolean; semHoteis: boolean}>;
  // hoteis$: Observable<Hotel[]>;
  // carregandoHoteis$: Observable<boolean>;
  skeletons: number[] = [];
  constructor(private store: Store<fromApp.AppState>) {
    // this.hoteis$ = this.store.select('buscarHoteis').pipe(map((buscarHoteisState) => buscarHoteisState.hoteis));
    // this.carregandoHoteis$ = this.store.select('buscarHoteis').pipe(map((buscarHoteisState) => buscarHoteisState.carregandoHoteis));
    this.vm$ = this.store.select('buscarHoteis').pipe(
      map((buscarHoteisState) => {
        return {hoteis: buscarHoteisState.hoteis, carregandoHoteis: buscarHoteisState.carregandoHoteis, semHoteis: buscarHoteisState.semHoteis};
      })
    );
    for (let i = 0; i < 10; i++) {
      this.skeletons.push(i);
    }
  }
}
