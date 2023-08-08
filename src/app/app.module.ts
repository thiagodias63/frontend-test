import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import * as fromApp from 'src/app/store/app.reducer';
import {AppComponent} from './app.component';
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {en_US} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NzPageHeaderModule} from 'ng-zorro-antd/page-header';
import {HeaderComponent} from './components/header/header.component';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {BuscarHoteisModule} from './buscar-hoteis/buscar-hoteis.module';
import {BuscarHoteisEffects} from './buscar-hoteis/store/buscar-hoteis.effets';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzPageHeaderModule,
    NzGridModule,
    BuscarHoteisModule,
    StoreModule.forRoot(fromApp.appReducer, {}),
    EffectsModule.forRoot([BuscarHoteisEffects]),
  ],
  providers: [{provide: NZ_I18N, useValue: en_US}],
  bootstrap: [AppComponent],
})
export class AppModule {}
