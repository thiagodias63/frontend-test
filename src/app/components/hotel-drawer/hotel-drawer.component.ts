import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, map} from 'rxjs';
import {alterarHotelSelecionadoAction} from 'src/app/buscar-hoteis/store/buscar-hoteis.actions';
import {Hotel} from 'src/app/entities/hotel/hotel';
import * as fromApp from 'src/app/store/app.reducer';

@Component({
  selector: 'hotel-drawer',
  template: `
    <ng-container *ngIf="hotelSelecionado$ | async as hotelSelecionado">
      <nz-drawer [nzClosable]="false" [nzVisible]="!!hotelSelecionado" nzPlacement="right" [nzWidth]="830" (nzOnClose)="aoFechar()">
        <ng-container *nzDrawerContent>
          <div class="hotel-drawer__avaliacoes">
            <span>{{ hotelSelecionado.stars }}</span>
            <nz-rate [nzDisabled]="true" [ngModel]="hotelSelecionado.stars"></nz-rate>
          </div>

          <section>
            <h1 class="hotel-drawer__nome-hotel">{{ hotelSelecionado.name }}</h1>
            <p class="hotel-drawer__endereco-hotel">{{ hotelSelecionado.address | addressPipe }}</p>
          </section>

          <div>
            <nz-carousel [nzEffect]="'scrollx'">
              <div nz-carousel-content *ngFor="let image of hotelSelecionado.images">
                <div [ngStyle]="{backgroundImage: 'url(' + image + ')'}" class="hotel-drawer__image"></div>
              </div>
            </nz-carousel>
          </div>

          <section>
            <h2 class="hotel-drawer__titulo-secao">Facilidades do hotel</h2>
            <hr />
            <div class="hotel-drawer__comodidades">
              <comodidades [mostrarNome]="true" [comodidades]="hotelSelecionado.amenities.slice(0, 4)" />
              <button
                *ngIf="!mostrarTodasComodidades"
                nz-button
                nzType="default"
                class="hotel-drawer__botao-mostrar-comodidades"
                (click)="aoMostrarTodasComodidades()"
                nzBlock
              >
                Mostrar todas as facilidades
              </button>
              <comodidades *ngIf="mostrarTodasComodidades" [mostrarNome]="true" [comodidades]="hotelSelecionado.amenities.slice(4)" />
            </div>
            <hr />
          </section>

          <section>
            <h2 class="hotel-drawer__titulo-secao">Conheça um pouco mais</h2>
            <p>{{ hotelSelecionado.description }}</p>
          </section>
        </ng-container>
      </nz-drawer>
    </ng-container>
  `,
  styles: [
    `
      .hotel-drawer__avaliacoes {
        font-size: 0.675rem;
      }
      ::ng-deep .hotel-drawer__avaliacoes .ant-rate-star:not(:last-child) {
        margin: 0;
      }
      ::ng-deep .hotel-drawer__avaliacoes .ant-rate {
        font-size: 0.875rem;
        margin-left: 5px;
      }
      ::ng-deep .hotel-drawer__avaliacoes .ant-rate-star svg {
        height: 0.875rem;
        width: 0.875rem;
      }
      .hotel-drawer__nome-hotel {
        font-size: 1.25rem;
        line-height: 1.25rem;
        margin-top: 16px;
        margin-bottom: 10px;
      }
      .hotel-drawer__endereco-hotel {
        margin-top: 0;
        margin-bottom: 16px;
      }
      .hotel-drawer__titulo-secao {
        margin-top: 30px;
        font-size: 1.125rem;
      }
      .hotel-drawer__image {
        background-size: cover;
        width: 100%;
        height: 418px;
        border-radius: 18px;
      }
      .hotel-drawer__comodidades {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
      }
      .hotel-drawer__botao-mostrar-comodidades {
        color: var(--primaryColor);
        border-color: var(--primaryColor);
        width: fit-content;
        border-radius: 25px;
      }
    `,
  ],
})
export class HotelDrawerComponent {
  hotelSelecionado$: Observable<Hotel | null>;
  mostrarTodasComodidades = false;

  constructor(private store: Store<fromApp.AppState>) {
    this.hotelSelecionado$ = this.store.select('buscarHoteis').pipe(map((buscarHoteisState) => buscarHoteisState.hotelSelecionado));
  }

  aoMostrarTodasComodidades(): void {
    this.mostrarTodasComodidades = true;
  }

  aoFechar(): void {
    this.mostrarTodasComodidades = false;
    this.store.dispatch(alterarHotelSelecionadoAction({hotelSelecionado: null}));
  }
}
