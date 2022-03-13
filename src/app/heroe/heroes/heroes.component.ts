import { Component } from "@angular/core";


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent{

  nombre:string = "IronMan";
  edad:number = 25;

  getnombreCapitalizado(){
    return this.nombre.toUpperCase();
  }

  obtenerNombre():string{
    return `${this.nombre} - ${this.edad}`
  }

  cambiarNombre():void{
    this.nombre = 'Spiderman';
  }

  cambiarEdad():void{
    this.edad = 18;
  }

}
