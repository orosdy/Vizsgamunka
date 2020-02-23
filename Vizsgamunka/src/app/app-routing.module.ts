import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  { path: 'fooldal', component: HomeComponent },
  { path: 'konyv', component: KonyvComponent },
  { path: 'wakond', component: WakondComponent },
  { path: 'halottugyek', component: HalottugyekComponent },
  { path: 'fulciromero', component: FulciromeroComponent },
  { path: 'cikk', component: CikkComponent },
  { path: 'prog', component: ProgComponent },
  { path: 'jog', component: JogComponent },
  { path: 'rendeles', component: RendelesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'rendeles/modosit', component: ModositComponent },
  { path: 'rendeles/lista', component: ListaComponent },
  { path: 'rendeles/hozzaad', component: HozzaadComponent },
  { path: '', redirectTo: '/fooldal', pathMatch: 'full' },
  { path: '**', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }