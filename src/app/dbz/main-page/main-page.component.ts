import { Component, OnInit } from '@angular/core';
import {Personaje} from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(private dbzService:DbzService){

    dbzService.saludar();
  }
 /*  personajes:Personaje[] = [
  {nombre:'Goku', poder:25000},
 {nombre:'Gohan', poder:1000},
  {nombre:'Krilin', poder:1000}];*/

  nuevo:Personaje = {
    nombre:"",
    poder: 0
  }
  nombre:string = '';
  poder:number = 0;

  nuevo2:Personaje = {nombre:'hola',poder:89};



  agregarNuevoPersonaje(personaje:Personaje):void{

    /*const exite = this.personajes.filter(person => person == personaje);
    if(exite.length==0)
    {
      if(personaje.nombre!='')
      {
        this.personajes.push({nombre:personaje.nombre,poder:personaje.poder});
      }

    }*/
  }
}
