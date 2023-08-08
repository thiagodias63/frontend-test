import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, map} from 'rxjs';
import {Place} from 'src/app/entities/place/place';
import * as fromApp from 'src/app/store/app.reducer';

@Component({
  selector: 'breadcrumb',
  template: ` <div class="breadcrumb__container">
    <nz-breadcrumb nzSeparator=">">
      <nz-breadcrumb-item>Início</nz-breadcrumb-item>
      <nz-breadcrumb-item>Hotéis</nz-breadcrumb-item>
      <nz-breadcrumb-item *ngIf="destinoSelecionado$ | async as destinoSelecionado">
        <a>{{ destinoSelecionado.name }}, {{ destinoSelecionado.state.shortname }}</a>
      </nz-breadcrumb-item>
    </nz-breadcrumb>
  </div>`,
  styles: [
    `
      .breadcrumb__container {
        margin: 1rem 0;
      }
      ::ng-deep .ant-breadcrumb-link {
        color: var(--primaryColor);
        font-size: 0.625rem;
      }
      ::ng-deep .ant-breadcrumb-link > a {
        color: var(--secondaryColor);
      }
    `,
  ],
})
export class BreadcrumbComponent {
  destinoSelecionado$: Observable<Place | null>;

  constructor(private store: Store<fromApp.AppState>) {
    this.destinoSelecionado$ = this.store.select('buscarHoteis').pipe(map((buscarHoteisState) => buscarHoteisState.filtroDestino));
  }
}
