import {Component, OnDestroy} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {NzAutocompleteOptionComponent} from 'ng-zorro-antd/auto-complete';
import {Observable, Subscription, map, startWith, switchMap} from 'rxjs';
import {alterarFiltroDestinoAction} from 'src/app/buscar-hoteis/store/buscar-hoteis.actions';
import {nomesDestinos} from 'src/app/buscar-hoteis/store/buscar-hoteis.selectors';
import {KeyValuePair} from 'src/app/entities/core/key-value';
import {Place} from 'src/app/entities/place/place';
import * as fromApp from 'src/app/store/app.reducer';

@Component({
  selector: 'formulario-buscar-reserva',
  templateUrl: './formulario-buscar-reserva.component.html',
  styleUrls: ['./formulario-buscar-reserva.component.css'],
})
export class FormularioBuscarReservaComponent implements OnDestroy {
  textoBotaoBuscar: 'Buscar' | 'Alterar Busca' = 'Buscar';
  destinos$: Observable<Place[]>;
  nomesDestinos$: Observable<KeyValuePair[]>;
  options$: Observable<KeyValuePair[] | null>;
  destinos: Place[] = [];
  buscarReservaForm = this.formBuilder.group({
    destino: ['', [Validators.minLength(3), Validators.required]],
    nomeHotel: [''],
  });
  destinosSubscription: Subscription;
  semHoteis$: Observable<boolean>;

  constructor(private formBuilder: FormBuilder, private store: Store<fromApp.AppState>) {
    this.destinos$ = this.store.select('buscarHoteis').pipe(map((buscarHoteisState) => buscarHoteisState.destinos));
    this.semHoteis$ = this.store.select('buscarHoteis').pipe(map((buscarHoteisState) => buscarHoteisState.semHoteis));
    this.nomesDestinos$ = this.store.select(nomesDestinos);
    this.destinosSubscription = this.destinos$.subscribe((destinos: Place[]) => {
      this.destinos = destinos;
    });

    this.options$ = this.buscarReservaForm.controls.destino.valueChanges.pipe(
      startWith(''),
      switchMap(
        (novoDestino: string | null): Observable<KeyValuePair[]> =>
          this.nomesDestinos$.pipe(
            map((destinos: KeyValuePair[]): KeyValuePair[] =>
              destinos.filter((destino) => destino.value.toLocaleLowerCase().includes(novoDestino?.toLocaleLowerCase() || ''))
            )
          )
      )
    );
  }

  aoAlterarDestino($event: NzAutocompleteOptionComponent): void {
    const [cidadeDestino, estadoDestino] = $event.nzValue.split(', ');

    const destino = this.destinos.find((destino: Place) => {
      return destino.name === cidadeDestino && destino.state.name === estadoDestino;
    });
    if (!destino) return;
    this.buscarReservaForm.controls.destino.setValue(`${destino.name}, ${destino.state.shortname}`);
  }

  aoBuscar() {
    if (this.buscarReservaForm.invalid || !this.buscarReservaForm.value.destino) return;

    const [cidadeDestino, estadoDestino] = this.buscarReservaForm.value.destino.split(', ');

    const destino = this.destinos.find((destino: Place) => {
      return destino.name === cidadeDestino && destino.state.shortname === estadoDestino;
    });
    if (!destino) return;

    this.store.dispatch(alterarFiltroDestinoAction({filtroDestino: destino, nomeHotel: this.buscarReservaForm.value.nomeHotel || ''}));
    this.textoBotaoBuscar = 'Alterar Busca';
  }

  ngOnDestroy(): void {
    this.destinosSubscription?.unsubscribe();
  }
}
