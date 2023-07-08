import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})

export class PizzasComponent {
  Nombre!: string;
  Direccion!: string;
  Telefono!: string;
  tamanoPizza!: string;
  numeroPizzas!: number;
  pizzas: any[] = [];
  pedidos: any[] = [];
  mostrarTotal: boolean = false;
  mostrarTotalClientes: boolean = false;

  jamonSeleccionado!: boolean;
  pinaSeleccionada!: boolean;
  champinonesSeleccionados!: boolean;
  ingredientesSeleccionados: string[] = [];
  actualizarIngredientes() {
    this.ingredientesSeleccionados = [];

    if (this.jamonSeleccionado) {
      this.ingredientesSeleccionados.push('Jamon');
    }

    if (this.pinaSeleccionada) {
      this.ingredientesSeleccionados.push('Piña');
    }

    if (this.champinonesSeleccionados) {
      this.ingredientesSeleccionados.push('Champiñones');
    }
  }



  agregarPizza() {
    let precioBase: number;
    if (!this.Nombre) {
      // Mostrar un mensaje de error o realizar alguna acción apropiada
      alert('El campo de nombre es obligatorio');
      return;
    }
    // Calcular el precio base según el tamaño de la pizza
    if (this.tamanoPizza === 'Chica') {
      precioBase = 40;
    } else if (this.tamanoPizza === 'Mediana') {
      precioBase = 80;
    } else if (this.tamanoPizza === 'Grande') {
      precioBase = 120;
    } else {
      // Tamaño de pizza no válido
      return;
    }

    // Calcular el precio total incluyendo el número de pizzas y los ingredientes seleccionados
    const precioTotal =
      precioBase * this.numeroPizzas + this.ingredientesSeleccionados.length * 10 * this.numeroPizzas;

    const pizza = {
      nombre: this.Nombre,
      direccion: this.Direccion,
      telefono: this.Telefono,
      tamano: this.tamanoPizza,
      ingredientes: this.ingredientesSeleccionados,
      cantidad: this.numeroPizzas,
      subtotal: precioTotal,
    };

    this.pizzas.push(pizza);
    this.pedidos.push(pizza); // Agregar el pedido al objeto pedidos

     // Reiniciar los valores de los ingredientes seleccionados
  this.jamonSeleccionado = false;
  this.pinaSeleccionada = false;
  this.champinonesSeleccionados = false;
    // Limpiar los campos después de agregar la pizza
    this.Nombre = '';
    this.Direccion = '';
    this.Telefono = '';
    this.tamanoPizza = '';
    this.ingredientesSeleccionados = [];
    this.numeroPizzas = 0;
  }

  eliminarPizza(index: number) {
    this.pizzas.splice(index, 1);
    this.pedidos.splice(index, 1); // Eliminar el pedido del objeto pedidos
  }

  terminarCompra() {
    const confirmacion = confirm('¿Estás seguro de terminar la compra?');

    if (confirmacion) {
      this.mostrarTotal = true;
      this.mostrarTotalClientes = true;
    }
  }

  obtenerTotal(): number {
    let total = 0;

    for (let i = 0; i < this.pizzas.length; i++) {
      const pizza = this.pizzas[i];
      total += pizza.subtotal;
    }

    return total;
  }

  obtenerTotalPedidos(): number {
    let total = 0;

    for (let i = 0; i < this.pedidos.length; i++) {
      const pedido = this.pedidos[i];
      total += pedido.subtotal;
    }

    return total;
  }
  obtenerClientes(): any[] {
    const clientes: any[] = [];
    for (const pedido of this.pedidos) {
      if (!clientes.some(cliente => cliente.nombre === pedido.nombre)) {
        clientes.push({ nombre: pedido.nombre });
      }
    }
    return clientes;
  }

  calcularTotalCliente(nombre: string): number {
    let total = 0;
    for (const pedido of this.pedidos) {
      if (pedido.nombre === nombre) {
        total += pedido.subtotal;
      }
    }
    return total;
  }
  finalizarCompra() {
    this.pedidos = []; // Reiniciar la lista de pedidos
    this, this.pizzas = [];
    this.mostrarTotal = false; // Ocultar el total
  }
}


