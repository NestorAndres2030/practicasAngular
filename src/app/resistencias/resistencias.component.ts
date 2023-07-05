import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {

  banda1 = [
    { name: 'Negro', value: 'black', number: 0 },
    { name: 'Café', value: 'brown', number: 1 },
    { name: 'Rojo', value: 'red', number: 2 },
    { name: 'Naranja', value: 'orange', number: 3 },
    { name: 'Amarillo', value: 'yellow', number: 4 },
    { name: 'Verde', value: 'green', number: 5 },
    { name: 'Azul', value: 'blue', number: 6 },
    { name: 'Violeta', value: 'violet', number: 7 },
    { name: 'Gris', value: 'gray', number: 8 },
    { name: 'Blanco', value: 'white', number: 9 }
  ];

  banda2 = [
    { name: 'Negro', value: 'black', number: 0 },
    { name: 'Café', value: 'brown', number: 1 },
    { name: 'Rojo', value: 'red', number: 2 },
    { name: 'Naranja', value: 'orange', number: 3 },
    { name: 'Amarillo', value: 'yellow', number: 4 },
    { name: 'Verde', value: 'green', number: 5 },
    { name: 'Azul', value: 'blue', number: 6 },
    { name: 'Violeta', value: 'violet', number: 7 },
    { name: 'Gris', value: 'gray', number: 8 },
    { name: 'Blanco', value: 'white', number: 9 }
  ];

  multiplicador = [
    { name: 'Negro', value: 'black', number: 1 },
    { name: 'Café', value: 'brown', number: 10 },
    { name: 'Rojo', value: 'red', number: 100 },
    { name: 'Naranja', value: 'orange', number: 1000 },
    { name: 'Amarillo', value: 'yellow', number: 10000 },
    { name: 'Verde', value: 'green', number: 100000 },
    { name: 'Azul', value: 'blue', number: 1000000 },
    { name: 'Violeta', value: 'violet', number: 10000000 },
    { name: 'Gris', value: 'gray', number: 100000000 },
    { name: 'Blanco', value: 'white', number: 1000000000 }
  ];

 // Variables utilizadas para almacenar
  selectbanda1!: number;
  selectbanda2!: number;
  selectMultiplication!: number;
  selectedTolerance!: number;
  resistenciaCalculada!: number;
  ValorMinimo!: number;
  ValorMaximo!: number;
// Arreglo para almacenar las resistencias seleccionadas
  Tabla: {
    banda1: { valor: number; color: string };
    banda2: { valor: number; color: string };
    multiplicador: { name: string; value: string; number: number; };
    tolerancia: { valor: number; color: string };
    resistencia: number;
    valorMinimo: number;
    valorMaximo: number;

  }[] = [];

 // Función para definir los estilos
  getOptionStyles(color: { value: any }): any {
    return {
      'background-color': color.value,
      color: 'white'
    };
  }
    // Función para calcular la resistencia y almacenar los resultados
  calcularResistencia(): void {
    if (this.selectbanda1 !== undefined && this.selectbanda2 !== undefined && this.selectMultiplication !== undefined) {
      // Cálculo de la resistencia
      const resistencia = (this.selectbanda1 + this.selectbanda2) * this.multiplicador[this.selectMultiplication].number;
      this.resistenciaCalculada = resistencia;
      
       // Cálculo del valor máximo y mínimo
      const valorMaximo = resistencia * (1 + this.selectedTolerance);
      const valorMinimo = resistencia * (1 - this.selectedTolerance);
      this.ValorMinimo = valorMinimo;
      this.ValorMaximo = valorMaximo;
    // Almacenamiento de los resultados en el arreglo 
      this.Tabla.push({
        banda1: { valor: this.selectbanda1, color: this.banda1[this.selectbanda1].value },
        banda2: { valor: this.selectbanda2, color: this.banda2[this.selectbanda2].value },
        multiplicador: {
          name: this.multiplicador[this.selectMultiplication].name,
          value: this.multiplicador[this.selectMultiplication].value,
          number: this.multiplicador[this.selectMultiplication].number,
        },
        tolerancia: {
          valor: this.selectedTolerance ,
          color: this.selectedTolerance == .05 ? 'gold' : 'silver',
        },
        resistencia: this.resistenciaCalculada,
        valorMinimo: this.ValorMinimo,
        valorMaximo: this.ValorMaximo
      });
      
    } else {
      alert('Por favor, selecciona todas las opciones.');
    }
  }
  
}
