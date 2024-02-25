import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SecaoLancamentoComponent } from './components/secao-lancamento/secao-lancamento.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SecaoLancamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
