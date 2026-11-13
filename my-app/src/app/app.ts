import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cost } from './cost/cost';
import { Votar } from './votar/votar';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cost, Votar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  ejercicio1() {
    let DNI: string = "45543286K";

    return DNI;
  }
  ejercicio2(){
    const PI: number = 3.1415926535;
    let radio: number = 5;

    const area: number = PI * Math.pow(radio, 2);
    return area;
  }
  ejercicio3() {
    let nombreUsuario = prompt("Escribe tu nombre: ");

    let saludo = ("Bienvenido: " + nombreUsuario);

    return saludo
  }
  ejercicio4(){
    let a = Number(prompt("¿Primer número?"));
    let b = Number(prompt("¿Segundo número?"));

    let suma = (a + b);

    return suma;
  }
  ejercicio5() {
    const PI: number = 3.1415926535;
    let radio: number = Number(prompt("Escribe el radio de tu circulo: "));

    const area: number = PI * Math.pow(radio, 2);
    return area;
  }
}


