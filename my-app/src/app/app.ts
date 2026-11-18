import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cost } from './cost/cost';
import { Votar } from './votar/votar';

type Alumne = {
  nom: string;
  edat: number;
  email: string;
};

class Employee {
  private name: string;
  private salary: number;

 constructor(name: string, salary: number){
  this.name = name;
  this.salary = salary
  }
  public getName(): string{
    return this.name;
  }

   public getSalary(): number{
    return this.salary;
  }

};


function EmployeeDades(emp: Employee):string {
  
  return "name: "+emp.getName() + " salary: "+emp.getSalary() + "€";
    
}

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
  
  ejercicio8a() {
    let num: number = Number(prompt("Escriu un número"));
    if (num > 0) {
      return 1;
    } else if (num < 0) {
      return -1;
    } else {
      return 0;
    }
  }

  ejercicio8b() {
    let a: number = Number(prompt("a?"));
    let b: number = Number(prompt("b?"));
    let result = (a + b < 4) ? "debajo" : "encima";
    return result;
  }

  // c) Ternarios múltiples
  ejercicio8c() {
    let num: number = Number(prompt("Escriu un número"));
    let result = (num > 0) ? 1 : (num < 0) ? -1 : 0;
    return result;
  }

  // d) switch
  ejercicio8d() {
    let num: number = Number(prompt("Escriu un número"));
    switch (true) {
      case num > 0:
        return 1;
      case num < 0:
        return -1;
      default:
        return 0;
    }
  }

 
  ejercicio9() {
    let usuari = prompt("Nom d'usuari?");
    if (usuari == "admin") {
      let contrasenya = prompt("Contrasenya?");
      if (contrasenya == "password") {
        return "Benvingut " + usuari;
      } else {
        return "Contrasenya incorrecta";
      }
    } else {
      return "No et conec";
    }
  }

  
  ejercicio10() {
    let secret: number = Math.floor(Math.random() * 100) + 1; 
    let num: number = -1;

    while (num != secret) {
      
      num = Number(prompt("Endevina el número (1-100). 0 per sortir"));

      if (num == 0) {
        return "Has sortit. La solució era " + secret;
      } else if (isNaN(num) || num < 1 || num > 100) {
        alert("Error: escriu un número de l'1 al 100");
      } else if (num < secret) {
        alert("El número és més GRAN");
      } else if (num > secret) {
        alert("El número és més PETIT");
      }
    }
    return "Has encertat! Era el " + secret;
  }



  // amb while
  ejercicio11a() {
    let n: number = Number(prompt("Quin número?"));
    let taula: string = "";
    let i: number = 1;
    while (i <= 10) {
      taula = taula + n + "x" + i + "=" + (n * i) + " ";
      
      i++;
    }
    return taula;
  }

  // amb do..while
  ejercicio11b() {
    let n: number = Number(prompt("Quin número?"));
    let taula: string = "";
    let i: number = 1;
    do {
      taula = taula + n + "x" + i + "=" + (n * i) + "\n";
      i++;
    } while (i <= 10);
    return taula;
  }

  // amb for
  ejercicio11c() {
    let n: number = Number(prompt("Quin número?"));
    let taula: string = "";
    for (let i = 1; i <= 10; i++) {
      taula = taula + n + "x" + i + "=" + (n * i) + "\n";
    }
    return taula;
  }

  
  ejercicio12() {
    let resultado: string ="";
    const fruits: string[] = ["Apple", "Orange", "Lemon"];
    let primera = fruits[0];          
    fruits[0] = "Banana";             
    fruits.push("Cirera");
    resultado = "La primera era: " + primera + " \n Ara: " + fruits;
    fruits.pop();
    resultado = resultado + "\n Borro cirera: -> " + fruits;
    return resultado;
     
  }

  
  ejercicio13() {
    const xs: number[] = [8, 9, 4, 5, 6, 2, 9, 4, 7, 2, 3];
    let maxim: number = Math.max(...xs);
    let minim: number = Math.min(...xs);
    return "Màxim: " + maxim + " | Mínim: " + minim;
  }

  
  ejercicio14() {
    const xs: string[] = ["Olivia Anderson", "Ethan Carter", "Isabella Brooks", "Olivia Bennett",
                          "Ava Morgan", "Noah Mitchell", "Mia Harper", "Liam Parker"];
    let olivies: string[] = [];
    for (let i = 0; i < xs.length; i++) {
      if (xs[i].startsWith("Olivia")) {
        olivies.push(xs[i]);
      }
    }
    return olivies;
  }

  ejercicio15() {
    const xs: (number | null)[] = [8, 9, 4, 5, null, 6, 2, 9, null, 4, 7, 2, 3];
    let suma: number = 0;
    let quantes: number = 0;
    for (let nota of xs) {
      if (nota != null) {        // només comptem les que hi són
        suma = suma + nota;
        quantes++;
      }
    }
    let mitjana: number = suma / quantes;
    return mitjana.toFixed(2);   // "5.36"
  }


  ejercicio16() {
    let user: any = {};
    user.name = "John";
    user.surname = "Smith";
    user.name = "Pete";
    delete user.surname;
    return JSON.stringify(user);
  }

  
  ejercicio17() {
    const salaries: any = {
      John: 100,
      Ann: 160,
      Pete: 130
    };
    let result: number = 0;          // si està buit, es queda a 0
    for (let nom in salaries) {
      result = result + salaries[nom];
    }
    return result;                   // 390
  }

 
  ejercicio18() {
    let jo: Alumne = {
      nom: "El teu nom",
      edat: 20,
      email: "elteunom@email.com"
    };
    console.log(jo);                  // totes les dades
    console.log(jo.nom.toUpperCase()); // una a una
    console.log(jo.edat);
    console.log(jo.email);
    return jo.nom.toUpperCase() + " - " + jo.edat + " - " + jo.email;
  }


  ejercicio19() {
    let clase: Alumne[] = [
      { nom: "Anna", edat: 19, email: "anna@email.com" },
      { nom: "Marc", edat: 21, email: "marc@email.com" }
    ];

    // accedint a la posició
    console.log(clase[0]);
    console.log(clase[1]);

    // amb un for
    let text: string = "";
    for (let i = 0; i < clase.length; i++) {
      text = text + clase[i].nom + " (" + clase[i].edat + ") ";
    }
    return text;
  }

  ejercicio20() {
    const empleado = new Employee('pepe', 2000);
    
    return EmployeeDades(empleado);
  }

}

