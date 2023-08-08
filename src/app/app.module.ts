import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {en_US} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NzPageHeaderModule} from 'ng-zorro-antd/page-header';
import {HeaderComponent} from './components/header/header.component';
import {ReservarHotelCardComponent} from './components/reservar-hotel-card/reservar-hotel-card';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {FormularioBuscarReservaComponent} from './components/formulario-buscar-reserva/formulario-buscar-reserva.component';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {OrganizarListagemReservasComponent} from './components/organizar-listagem-reservas/organizar-listagem-reservas.component';
import {HotelCardComponent} from './components/hotel-card/hotel-card.component';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzRateModule} from 'ng-zorro-antd/rate';
import {NzCarouselModule} from 'ng-zorro-antd/carousel';
import {HotelCardSecaoInformacoesComponent} from './components/hotel-card/hotel-card-secao-informacoes/hotel-card-secao-informacoes.component';
import {HotelCardSecaoValoresComponent} from './components/hotel-card/hotel-card-secao-valores/hotel-card-secao-valores.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReservarHotelCardComponent,
    FormularioBuscarReservaComponent,
    BreadcrumbComponent,
    OrganizarListagemReservasComponent,
    HotelCardComponent,
    HotelCardSecaoInformacoesComponent,
    HotelCardSecaoValoresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzPageHeaderModule,
    NzCardModule,
    NzGridModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzBreadCrumbModule,
    NzDropDownModule,
    NzDividerModule,
    NzRateModule,
    NzCarouselModule,
  ],
  providers: [{provide: NZ_I18N, useValue: en_US}],
  bootstrap: [AppComponent],
})
export class AppModule {}
