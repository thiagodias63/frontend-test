import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'formulario-buscar-reserva',
  template: ` <form nz-form nzLayout="vertical" [formGroup]="buscarReservaForm">
    <nz-form-item>
      <nz-form-label [nzSpan]="24" nzFor="destino" nzRequired>Destino</nz-form-label>
      <nz-form-control [nzSpan]="24">
        <input nz-input name="destino" type="text" id="destino" formControlName="destino" />
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
  buscarReservaForm = this.formBuilder.group({
    destino: ['', Validators.required],
  });
  constructor(private formBuilder: FormBuilder) {}
}
