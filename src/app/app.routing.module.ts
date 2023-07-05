import { Router, RouterModule,Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CinepolisComponent } from "./cinepolis/cinepolis.component";
import { DistanciaComponent } from "./distancia/distancia.component";
import { ResistenciasComponent } from "./resistencias/resistencias.component";




const rutes:Routes=[
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'Cinepolis',component:CinepolisComponent},
    {path:'Distancia',component:DistanciaComponent},
    {path:'Resistencia',component:ResistenciasComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(rutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}
