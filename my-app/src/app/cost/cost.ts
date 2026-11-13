import { Component } from '@angular/core';

@Component({
  selector: 'app-cost',
  imports: [],
  templateUrl: './cost.html',
  styleUrl: './cost.css',
})
export class Cost {
  coste() {
  let altura:number = Number(prompt("Escribe el alto de tu caja en centímetros: "));
  let largo:number = Number(prompt("Escribe el largo de tu caja en centímetros: "));
  let ancho:number = Number(prompt("Escribe el ancho de tu caja en centímetros: "));

  let volumen:number = altura * largo * ancho;

    let precio:number = volumen / 5000;
    return precio + "€";
  }
}
