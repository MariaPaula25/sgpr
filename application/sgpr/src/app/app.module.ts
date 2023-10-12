import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocaleModule } from '../locale/locale.module';
import { HomeModule } from './home/home.module';
import { SigninModule } from './signin/signin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    LocaleModule,
    TranslateModule,
    HomeModule,
    SigninModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
