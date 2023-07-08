import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { PizzasComponent } from '../pizzas/pizzas.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    PizzasComponent
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
    PizzasComponent
  ]
})
export class ComponentesPizzas { }
