import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CinepolisComponent } from './cinepolis/cinepolis.component';

import { ComponentesModule } from './componentes/componentes.module';
import { ComponenteresistenciaModule } from './componenteresistencia/componenteresistencia.module';
import {ComponentecinepolisModule} from './componentecinepolis/componentecinepolis.module';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app.routing.module';
import { PizzasComponent } from './pizzas/pizzas.component';
import { FormsModule } from '@angular/forms';
import { ComponentesPizzas } from './componentespizzas/componentes.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentecinepolisModule,
    FormsModule,
    ComponentesPizzas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
