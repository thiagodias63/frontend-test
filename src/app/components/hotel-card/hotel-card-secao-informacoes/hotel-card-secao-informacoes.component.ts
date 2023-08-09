import {Component, Input} from '@angular/core';
import {Amenity} from 'src/app/entities/hotel/amenity';

@Component({
  selector: 'hotel-card-secao-informacoes',
  templateUrl: './hotel-card-secao-informacoes.component.html',
  styleUrls: ['./hotel-card-secao-informacoes.component.css'],
})
export class HotelCardSecaoInformacoesComponent {
  @Input() nome = '';
  @Input() descricao = '';
  @Input() comodidades: Amenity[] = [];
  @Input() avaliacao: string | number = 0;
  @Input() reembolsavel = false;
}
