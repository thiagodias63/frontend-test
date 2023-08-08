import {Component} from '@angular/core';

@Component({
  selector: 'reservar-hotel-card',
  template: `
    <nz-card nzTitle="Reservar hotel">
      <formulario-buscar-reserva />
    </nz-card>
  `,
  styles: [],
})
export class ReservarHotelCardComponent {}
