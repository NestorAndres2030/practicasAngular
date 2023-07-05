import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ComponentesModule } from './componentes/componentes.module';
import { ComponenteresistenciaModule } from './componenteresistencia/componenteresistencia.module';
import {ComponentecinepolisModule} from './componentecinepolis/componentecinepolis.module';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentesModule,
    ComponenteresistenciaModule,
    ComponentecinepolisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
