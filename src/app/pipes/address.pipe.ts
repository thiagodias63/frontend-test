import {Pipe, PipeTransform} from '@angular/core';
import {Address} from '../entities/hotel/address';

@Pipe({
  name: 'addressPipe',
  pure: true,
})
export class AddressPipe implements PipeTransform {
  transform(address: Address): string {
    let enderecoFormatado = `${address.fullAddress}, ${address.city} - ${address.state}`;
    if (address.zipCode) {
      let cep = address.zipCode;
      cep = `${cep.slice(0, 5)}-${cep.slice(5)}`;
      enderecoFormatado += ` ${cep}`;
    }
    return enderecoFormatado;
  }
}
