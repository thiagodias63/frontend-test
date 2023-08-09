import {TestBed} from '@angular/core/testing';
import {BuscarHoteisModule} from '../../buscar-hoteis/buscar-hoteis.module';
import {hotelExemplo} from 'src/tests/mocks/hotel';
import {HotelCarouselImagesComponent} from './hotel-carousel-images.component';

describe('HotelCarouselImagesComponent', () => {
  let fixture;
  let component: HotelCarouselImagesComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarHoteisModule],
      declarations: [HotelCarouselImagesComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(HotelCarouselImagesComponent);
    component = fixture.componentInstance;
    component.imagens = hotelExemplo.images;
    component.nzCarouselComponent = jasmine.createSpyObj('NzCarouselComponent', ['pre', 'next']);
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  describe('#aoAlterarAImagem', () => {
    const acoes: Array<{funcao: 'pre' | 'next'; nome: string}> = [
      {funcao: 'pre', nome: 'anterior'},
      {funcao: 'next', nome: 'próxima'},
    ];
    acoes.forEach((acao) => {
      it('deve alterar a imagem na seleção escolhida: ' + acao.nome, () => {
        const direcao = acao.funcao;
        component.aoAlterarAImagem(direcao);
        expect(component.nzCarouselComponent[direcao]).toHaveBeenCalled();
      });
    });
  });
});
