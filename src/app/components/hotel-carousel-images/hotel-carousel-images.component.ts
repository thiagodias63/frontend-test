import {Component, Input, ViewChild} from '@angular/core';
import {NzCarouselComponent} from 'ng-zorro-antd/carousel';

@Component({
  selector: 'hotel-carousel-images',
  template: `<nz-carousel nzEffect="scrollx" [nzDots]="false" [ngStyle]="{height: fotoHotelGrande ? '418px' : '255px'}">
    <div nz-carousel-content *ngFor="let image of imagens; let index = index">
      <div
        [ngStyle]="{backgroundImage: 'url(' + image + ')'}"
        class="hotel-carousel-images__foto-hotel"
        [ngClass]="{'hotel-carousel-images__foto-hotel--grande': fotoHotelGrande}"
      >
        <button class="hotel-carousel-images__botao-slide" (click)="aoAlterarAImagem('pre')">
          <span nz-icon nzType="left" nzTheme="outline"></span>
        </button>
        <span class="hotel-carousel-images__indice-imagem" *ngIf="fotoHotelGrande">{{ index + 1 }}/{{ imagens.length }} </span>
        <button class="hotel-carousel-images__botao-slide" (click)="aoAlterarAImagem('next')">
          <span nz-icon nzType="right" nzTheme="outline"></span>
        </button>
      </div>
    </div>
  </nz-carousel>`,
  styles: [
    `
      .hotel-carousel-images__botao-slide {
        border-radius: 25px;
        border: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4px;
        margin: 0 10px;
        cursor: pointer;
      }
      .hotel-carousel-images__foto-hotel {
        background-size: cover;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .hotel-carousel-images__foto-hotel--grande {
        height: 418px;
        border-radius: 18px;
      }
      .hotel-carousel-images__indice-imagem {
        align-self: flex-end;
        margin-bottom: 10px;
        border-radius: 15px;
        padding: 0 10px;
        background: rgba(0, 0, 0, 0.7);
        color: white;
      }
    `,
  ],
})
export class HotelCarouselImagesComponent {
  @ViewChild(NzCarouselComponent, {static: false}) nzCarouselComponent!: NzCarouselComponent;
  @Input() imagens: string[] = [];
  @Input() fotoHotelGrande = false;

  aoAlterarAImagem(direction: 'pre' | 'next'): void {
    this.nzCarouselComponent[direction]();
  }
}
