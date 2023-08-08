import {Component} from '@angular/core';

@Component({
  selector: 'hotel-card-secao-informacoes',
  template: `
    <section class="secao-informacoes__container">
      <h2 class="secao-informacoes__nome-hotel">Mélia Paulista</h2>
      <p class="secao-informacoes__localizacao">São paulo, Paraiso, A 2,97 km do centro</p>
      <div class="secao-informacoes__avaliacao">
        <span>8.3</span>
        <nz-rate [nzDisabled]="true" [ngModel]="5"></nz-rate>
        <nz-divider class="divisor" nzType="vertical"></nz-divider>
      </div>

      <span class="reembolsavel-badge">Reembolsável</span>
    </section>
  `,
  styles: [
    `
      .secao-informacoes__container {
        padding-left: 1.5rem;
        padding-top: 1rem;
      }
      .secao-informacoes__nome-hotel {
        font-size: 1rem;
        margin-bottom: 5px;
      }
      .secao-informacoes__localizacao {
        font-size: 0.625rem;
        margin-bottom: 16px;
      }
      .secao-informacoes__avaliacao {
        font-size: 0.5rem;
        margin-bottom: 8px;
      }
      .reembolsavel-badge {
        display: block;
        width: fit-content;
        padding: 7px 8px;
        border-radius: 8px;
        background-color: var(--defaultGreyColor);
        color: white;
        font-size: 0.625rem;
      }
      ::ng-deep hotel-card-secao-informacoes .ant-rate-star:not(:last-child) {
        margin: 0;
      }
      ::ng-deep hotel-card-secao-informacoes .ant-rate {
        font-size: 12px;
        margin-left: 5px;
      }
      ::ng-deep hotel-card-secao-informacoes .ant-rate-star svg {
        height: 0.5rem;
        width: 0.5rem;
      }
      .divisor {
        margin: 0 7px;
      }
    `,
  ],
})
export class HotelCardSecaoInformacoesComponent {}
