import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { CustomMaterialModule } from './rendeles/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { KonyvComponent } from './konyv/konyv.component';
import { WakondComponent } from './konyv/wakond/wakond.component';
import { HalottugyekComponent } from './konyv/halottugyek/halottugyek.component';
import { FulciromeroComponent } from './konyv/fulciromero/fulciromero.component';

import { HomeComponent } from './home/home.component';
import { CikkComponent } from './cikk/cikk.component';
import { ProgComponent } from './prog/prog.component';
import { JogComponent } from './jog/jog.component';

import { RendelesComponent } from './rendeles/rendeles.component';
import { HozzaadComponent } from './rendeles/hozzaad/hozzaad.component';
import { ListaComponent } from './rendeles/lista/lista.component';
import { ModositComponent } from './rendeles/modosit/modosit.component';
import { LoginComponent } from './rendeles/login/login.component';

import { CountdownModule } from "ng2-date-countdown";

import { RendelesService } from './rendeles/service/rendeles.service';

import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

@NgModule({
  declarations: [
    AppComponent,
    KonyvComponent,
    HomeComponent,
    CikkComponent,
    ProgComponent,
    JogComponent,
    RendelesComponent,
    HozzaadComponent,
    ListaComponent,
    ModositComponent,
    HalottugyekComponent,
    FulciromeroComponent,
    WakondComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    HttpClientModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    CountdownModule,
    FormsModule, 
    ReactiveFormsModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'})
  ],
  providers: [RendelesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
