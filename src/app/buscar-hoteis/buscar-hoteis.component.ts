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
  hoteis$: Observable<Hotel[]>;

  constructor(private store: Store<fromApp.AppState>) {
    this.hoteis$ = this.store.select('buscarHoteis').pipe(map((buscarHoteisState) => buscarHoteisState.hoteis));
  }
}
