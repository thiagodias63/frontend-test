import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'hotel-card-secao-valores',
  template: `<div class="secao-valores__container">
    <p>
      A partir de: <span class="total__row">R$ <span class="total__value">1.322,00</span></span>
      <span class="per-noite__row">R$444,00/noite</span>
      <span class="impostos__row">Impostos inclusos</span>
    </p>
    <button (click)="aoSelecionarHotel.emit()" nz-button class="botao-selecionar" nzSize="large" nzShape="round" nzType="primary">Selecionar</button>
  </div>`,
  styles: [
    `
      .secao-valores__container {
        padding-left: 1.5rem;
        padding-top: 1rem;
        font-size: 0.625rem;
        line-height: 1rem;
      }
      .total__row {
        margin: 0.25rem 0;
      }
      .total__row,
      .impostos__row {
        display: block;
        color: black;
      }
      .total__value {
        font-size: 1.25rem;
      }
      .per-noite__row {
        display: block;
        color: var(--secondaryColor);
      }
      .botao-selecionar {
        margin-top: 2rem;
      }
    `,
  ],
})
export class HotelCardSecaoValoresComponent {
  @Output() aoSelecionarHotel = new EventEmitter<null>();
}
