import { RouterModule,Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CinepolisComponent } from "./cinepolis/cinepolis.component";
import { DistanciaComponent } from "./distancia/distancia.component";
import { ResistenciasComponent } from "./resistencias/resistencias.component";
import { PizzasComponent } from "./pizzas/pizzas.component";


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'CinepolisComponent', component: CinepolisComponent },
    { path: 'DistanciaComponent', component: DistanciaComponent },
    { path: 'ResistenciasComponent', component: ResistenciasComponent },
    { path: 'PizzasComponent', component: PizzasComponent }
  ];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}
