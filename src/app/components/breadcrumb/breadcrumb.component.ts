import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, map} from 'rxjs';
import {Place} from 'src/app/entities/place/place';
import * as fromApp from 'src/app/store/app.reducer';

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
})
export class BreadcrumbComponent {
  destinoSelecionado$: Observable<Place | null>;

  constructor(private store: Store<fromApp.AppState>) {
    this.destinoSelecionado$ = this.store.select('buscarHoteis').pipe(map((buscarHoteisState) => buscarHoteisState.filtroDestino));
  }
}
