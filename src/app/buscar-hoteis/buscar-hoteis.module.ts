import {NgModule} from '@angular/core';
import {BuscarHoteisComponent} from './buscar-hoteis.component';
import {ReservarHotelCardComponent} from '../components/reservar-hotel-card/reservar-hotel-card.component';
import {FormularioBuscarReservaComponent} from '../components/formulario-buscar-reserva/formulario-buscar-reserva.component';
import {OrganizarListagemReservasComponent} from '../components/organizar-listagem-reservas/organizar-listagem-reservas.component';
import {HotelCardComponent} from '../components/hotel-card/hotel-card.component';
import {HotelCardSecaoInformacoesComponent} from '../components/hotel-card/hotel-card-secao-informacoes/hotel-card-secao-informacoes.component';
import {HotelCardSecaoValoresComponent} from '../components/hotel-card/hotel-card-secao-valores/hotel-card-secao-valores.component';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzRateModule} from 'ng-zorro-antd/rate';
import {NzCarouselModule} from 'ng-zorro-antd/carousel';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BreadcrumbModule} from '../components/breadcrumb/breadcrumb.module';
import {NzAutocompleteModule} from 'ng-zorro-antd/auto-complete';
import {CommonModule} from '@angular/common';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzSpinModule} from 'ng-zorro-antd/spin';
import {ComodidadesComponent} from '../components/comodidades/comodidades.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {NzDrawerModule} from 'ng-zorro-antd/drawer';
import {HotelDrawerComponent} from '../components/hotel-drawer/hotel-drawer.component';
import {AddressPipeModule} from '../pipes/address-pipe.module';
import {HotelCarouselImagesComponent} from '../components/hotel-carousel-images/hotel-carousel-images.component';

@NgModule({
  declarations: [
    BuscarHoteisComponent,
    ReservarHotelCardComponent,
    FormularioBuscarReservaComponent,
    OrganizarListagemReservasComponent,
    HotelCardComponent,
    HotelCardSecaoInformacoesComponent,
    HotelCardSecaoValoresComponent,
    ComodidadesComponent,
    HotelDrawerComponent,
    HotelCarouselImagesComponent,
  ],
  exports: [BuscarHoteisComponent],
  imports: [
    CommonModule,
    NzCardModule,
    NzFormModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzDropDownModule,
    NzDividerModule,
    NzRateModule,
    NzCarouselModule,
    BreadcrumbModule,
    NzAutocompleteModule,
    NzSpinModule,
    NzIconModule,
    InfiniteScrollModule,
    NzDrawerModule,
    AddressPipeModule,
  ],
})
export class BuscarHoteisModule {}
