import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {NzAutocompleteOptionComponent} from 'ng-zorro-antd/auto-complete';
import {Observable, map, startWith, switchMap} from 'rxjs';
import {nomesDestinos} from 'src/app/buscar-hoteis/store/buscar-hoteis.selectors';
import {Place} from 'src/app/entities/place/place';
import * as fromApp from 'src/app/store/app.reducer';

@Component({
  selector: 'formulario-buscar-reserva',
  template: ` <form nz-form nzLayout="vertical" [formGroup]="buscarReservaForm">
    <nz-form-item>
      <nz-form-label [nzSpan]="24" nzFor="destino" nzRequired>Destino</nz-form-label>
      <nz-form-control [nzSpan]="24" *ngIf="options$ | async as options">
        <input nz-input name="destino" type="text" id="destino" formControlName="destino" [nzAutocomplete]="auto" />
        <nz-autocomplete [nzDataSource]="options" nzBackfill #auto (selectionChange)="aoAlterarDestino($event)"></nz-autocomplete>
      </nz-form-control>
    </nz-form-item>

    <button nz-button class="buscar-reserva__buscar" nzSize="large" nzShape="round" nzType="primary">{{ textoBotaoBuscar }}</button>
  </form>`,
  styles: [
    `
      .buscar-reserva__buscar {
        float: right;
      }
    `,
  ],
})
export class FormularioBuscarReservaComponent {
  textoBotaoBuscar: 'Buscar' | 'Alterar Busca' = 'Buscar';
  destinos$: Observable<Place[]>;
  nomesDestinos$: Observable<string[]>;
  options$: Observable<string[] | null>;
  buscarReservaForm = this.formBuilder.group({
    destino: ['', Validators.required],
    chaveDestino: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder, private store: Store<fromApp.AppState>) {
    this.destinos$ = this.store.select('buscarHoteis').pipe(map((buscarHoteisState) => buscarHoteisState.destinos));
    this.nomesDestinos$ = this.store.select(nomesDestinos);

    this.options$ = this.buscarReservaForm.controls.destino.valueChanges.pipe(
      startWith(''),
      switchMap(
        (novoDestino: string | null): Observable<string[]> =>
          this.nomesDestinos$.pipe(
            map((destinos: string[]): string[] =>
              destinos.filter((destino) => destino.toLocaleLowerCase().includes(novoDestino?.toLocaleLowerCase() || ''))
            )
          )
      )
    );
  }

  aoAlterarDestino($event: NzAutocompleteOptionComponent): void {
    const [cidadeDestino, estadoDestino] = $event.nzValue.split(', ');
    this.destinos$.subscribe((destinos: Place[]) => {
      const destino = destinos.find((destino: Place) => {
        return destino.name === cidadeDestino && destino.state.name === estadoDestino;
      });
      if (!destino) return;
      this.buscarReservaForm.controls.destino.setValue(`${destino.name}, ${destino.state.shortname}`);
    });
  }
}
