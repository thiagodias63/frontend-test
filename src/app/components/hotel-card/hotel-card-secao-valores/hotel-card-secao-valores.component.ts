import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'hotel-card-secao-valores',
  templateUrl: './hotel-card-secao-valores.component.html',
  styleUrls: ['./hotel-card-secao-valores.component.css'],
})
export class HotelCardSecaoValoresComponent {
  @Output() aoSelecionarHotel = new EventEmitter<null>();
}
