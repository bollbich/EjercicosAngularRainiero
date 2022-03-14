import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{

  private _personajes:Personaje[] = [
    {nombre:'Goku', poder:25000},
   {nombre:'Gohan', poder:1000},
    {nombre:'Krilin', poder:1000}];

    get personajes():Personaje[]
    {
       return [...this._personajes];
    }

  constructor(){
    console.log('Servicio iniciado');
  }

  saludar():void{
    console.log('Hola como estas desde el servicio');
  }

  agregarPersonaje(personaje:Personaje)
  {
    const exite = this._personajes.filter(person => person == personaje);
    if(exite.length==0)
    {
      if(personaje.nombre!='')
      {
        this._personajes.push({nombre:personaje.nombre, poder:personaje.poder});
      }
    }

  }
}
