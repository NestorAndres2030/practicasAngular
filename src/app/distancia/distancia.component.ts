import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  templateUrl: './distancia.component.html',
  styleUrls: ['./distancia.component.css']
})
export class DistanciaComponent {
  x1!: number;
  x2!: number;
  y1!: number;
  y2!: number;
  resultado!: number;
  
  calcular() {
    const distanciaX = this.x2 - this.x1;
    const distanciaY = this.y2 - this.y1;
    this.resultado = Math.sqrt((distanciaX * distanciaX) + (distanciaY * distanciaY ) );
  }
}

  

