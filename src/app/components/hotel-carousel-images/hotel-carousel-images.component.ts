import {Component, Input, ViewChild} from '@angular/core';
import {NzCarouselComponent} from 'ng-zorro-antd/carousel';

@Component({
  selector: 'hotel-carousel-images',
  templateUrl: './hotel-carousel-images.component.html',
  styleUrls: ['./hotel-carousel-images.component.css'],
})
export class HotelCarouselImagesComponent {
  @ViewChild(NzCarouselComponent, {static: false}) nzCarouselComponent!: NzCarouselComponent;
  @Input() imagens: string[] = [];
  @Input() fotoHotelGrande = false;

  aoAlterarAImagem(direction: 'pre' | 'next'): void {
    this.nzCarouselComponent[direction]();
  }
}
