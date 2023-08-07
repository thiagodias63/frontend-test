import {Component} from '@angular/core';

@Component({
  selector: 'reservar-hotel-card',
  template: `
    <nz-card nzTitle="Reservar hotel" [nzBodyStyle]="{paddingTop: '14px', paddingLeft: '17px', paddingRight: '17px', paddingBottom: '16px'}">
      <formulario-buscar-reserva></formulario-buscar-reserva>
    </nz-card>
  `,
  styles: [],
})
export class ReservarHotelCardComponent {}
