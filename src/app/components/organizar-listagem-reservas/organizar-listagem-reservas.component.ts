import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, map} from 'rxjs';
import {alterarOrganizarPorAction} from 'src/app/buscar-hoteis/store/buscar-hoteis.actions';
import {organizarPorOpcoes} from 'src/app/entities/core/organizar-por';
import * as fromApp from 'src/app/store/app.reducer';

@Component({
  selector: 'organizar-listagem-reservas',
  template: `<ng-container *ngIf="vm$ | async as vm">
    <div *ngIf="vm.mostrarOrganizadoPor">
      <span> Organizar por: </span>
      <a nz-dropdown [nzDropdownMenu]="menu">
        {{ vm.organizarPorSelecionado }}
        <span nz-icon nzType="down"></span>
      </a>
      <nz-dropdown-menu #menu="nzDropdownMenu">
        <ul nz-menu nzSelectable>
          <li (click)="alterarOrganizarPor('Recomendados')" nz-menu-item>Recomendados</li>
          <li (click)="alterarOrganizarPor('Melhor Avaliados')" nz-menu-item>Melhor Avaliados</li>
        </ul>
      </nz-dropdown-menu>
    </div>
  </ng-container>`,
})
export class OrganizarListagemReservasComponent {
  vm$: Observable<{mostrarOrganizadoPor: boolean; organizarPorSelecionado: organizarPorOpcoes}>;

  constructor(private store: Store<fromApp.AppState>) {
    this.vm$ = this.store.select('buscarHoteis').pipe(
      map((buscarHoteisState) => {
        return {mostrarOrganizadoPor: buscarHoteisState.mostrarOrganizadoPor, organizarPorSelecionado: buscarHoteisState.organizarPorSelecionado};
      })
    );
  }

  alterarOrganizarPor($event: organizarPorOpcoes): void {
    this.store.dispatch(alterarOrganizarPorAction({novoFiltro: $event}));
  }
}
