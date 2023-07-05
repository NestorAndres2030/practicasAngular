import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  nombre!: string;
  Compradores!: number;
  Tarjeta: string = 'false';
  Boletos!: number;
  resultados: {
    numero: number,
    texto: string
  } = {
      numero: 0,
      texto: ''
    };
 
    calcular(): void {
      if (this.Compradores == 1 && this.Boletos > 7 || this.Compradores == 2 && this.Boletos > 14 || this.Compradores == 3 && this.Boletos > 21) {
        this.resultados.texto = 'No se puede comprar más de 7 boletos por persona';
      } else if (this.Tarjeta == 'true') {
        if (this.Boletos > 5) {
          const Cdescuentot = (this.Boletos * 12) * 0.85;
          const SegDescuentot = Cdescuentot * 0.90;
          this.resultados.numero = SegDescuentot;
        } else if (this.Boletos >= 3 && this.Boletos <= 5) {
          const Cdescuentos = (this.Boletos * 12) * 0.90;
          const SegDescuentos = Cdescuentos * 0.90;
          this.resultados.numero = SegDescuentos;
        } else {
          this.resultados.numero = this.Boletos * 12;
        }
      } else {
        if (this.Boletos > 5) {
          const CdescuentoNt = (this.Boletos * 12) * 0.15;
          this.resultados.numero = (this.Boletos * 12) - CdescuentoNt;
        } else if (this.Boletos >= 3 && this.Boletos <= 5) {
          const Cdescuenton = (this.Boletos * 12) * 0.10;
          this.resultados.numero = (this.Boletos * 12) - Cdescuenton;
        } else {
          this.resultados.numero = this.Boletos * 12;
        }
      }
      window.location.reload
    }
    
    
    
}
