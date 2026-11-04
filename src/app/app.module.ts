import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceCubos } from './service/service.cubos';
import { CubosComponent } from './components/cubos/cubos.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ComprarComponent } from './components/comprar/comprar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CubosComponent,
    DetallesComponent,
    LoginComponent,
    PerfilComponent,
    ComprarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ServiceCubos, provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
