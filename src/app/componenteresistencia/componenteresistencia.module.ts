import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { ResistenciasComponent } from '../resistencias/resistencias.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ResistenciasComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    FormsModule
  ],
  exports:[
    ResistenciasComponent
  ]
})
export class ComponenteresistenciaModule { }
