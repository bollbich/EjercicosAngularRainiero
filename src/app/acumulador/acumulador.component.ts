import { Component } from "@angular/core";

@Component({
  selector: 'app-acumulador',
  templateUrl: './acumulador.component.html',
  styleUrls: ['./acumulador.component.css']
})

export class AcumuladorComponent{

  title = 'hola-angular';
  nombre:string = "Ray";
  formacion:string = "Angular";
  numero:number = 0;
  base:number = 0;
  titulo = 'contador';

  calculo(accion:number):void
  {
    switch (accion) {
      case 1:
        this.numero = this.numero+this.base;
        break;
      case 2:
        this.numero = this.numero-this.base;
        break;

      default:
        break;
    }
  }

  calculoBase(accion:number):void
  {
    switch (accion) {
      case 1:
        this.base++;
        break;
      case 2:
        this.base--;
        break;

      default:
        break;
    }
  }

}
