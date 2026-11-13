import { Component } from '@angular/core';

@Component({
  selector: 'app-votar',
  imports: [],
  templateUrl: './votar.html',
  styleUrl: './votar.css',
})
export class Votar {

  puedesVotar() {

    let edad:number = Number(prompt("Cuantos años tienes: "));
    let mensaje:string = "";
    if (edad > 17 && edad <= 130) {
      mensaje = "Puedes votar";
    } else if (edad < 0) {
      mensaje = "Pon una edad mayor a cero";
    }
    else if (edad > 130) {
      mensaje = "Pon una edad menor";
    }
    else {
      let añosParaVotar:number = 18 - edad;
      if (añosParaVotar === 1) {
        mensaje = "no puedes votar, te falta " + añosParaVotar + " año";
      } else{
      mensaje = "no puedes votar, te faltan " + añosParaVotar + " años";
    }
  }
  return mensaje;
}
}
