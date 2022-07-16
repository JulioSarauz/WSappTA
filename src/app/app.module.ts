import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogeoComponent } from './logeo/logeo.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { HttpClientModule } from '@angular/common/http';
import { SERVICIOSPHP } from './constantes/SERVICIOS';
import { ActualizarComponent } from './componentes/actualizar/actualizar.component';


@NgModule({
  declarations: [
    AppComponent,
    LogeoComponent,
    InicioComponent,
    UsuariosComponent,
    CarouselComponent,
    CabeceraComponent,
    ActualizarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    ActualizarComponent,
    ...SERVICIOSPHP
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
