import {Pipe, PipeTransform} from '@angular/core';
import {Address} from '../entities/hotel/address';

@Pipe({
  name: 'addressPipe',
  pure: true,
})
export class AddressPipe implements PipeTransform {
  transform(address: Address): string {
    let enderecoFormatado = `${address.fullAddress} - ${address.state} `;
    if (address.zipCode) enderecoFormatado += `, ${address.zipCode || ''}`;
    return enderecoFormatado;
  }
}
