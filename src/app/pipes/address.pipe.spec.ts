import {Address} from '../entities/hotel/address';
import {AddressPipe} from './address.pipe';

describe('AddressPipe', () => {
  const addressPipe = new AddressPipe();
  const enderecoComCep: Address = {
    city: 'BH',
    country: 'BR',
    district: 'Cardoso',
    number: '45',
    state: 'MG',
    street: 'Rua A',
    zipCode: '30626650',
    fullAddress: 'Rua A, 45 - Cardoso',
  };

  const casosDeTeste: Array<{endereco: Address; especificacao: string; resultado: string}> = [
    {
      endereco: enderecoComCep,
      resultado: 'Rua A, 45 - Cardoso, BH - MG 30626-650',
      especificacao: 'deve retornar o endereço com cep, caso tenha cep',
    },
    {
      endereco: {...enderecoComCep, zipCode: null},
      resultado: 'Rua A, 45 - Cardoso, BH - MG',
      especificacao: 'deve retornar o endereço sem cep, caso não tenha cep',
    },
  ];

  casosDeTeste.forEach((teste) => {
    it(teste.especificacao, () => {
      expect(addressPipe.transform(teste.endereco)).toEqual(teste.resultado);
    });
  });
});
