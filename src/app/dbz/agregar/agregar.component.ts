import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input() personajesDelHijo:Personaje[]=[];

  nuevo:Personaje = {nombre:'',poder:0};

  constructor(private dbzService:DbzService)
  {

  }

  @Output( )onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();


  AgregarPersonaje():void{

    const exite = this.personajesDelHijo.filter(person => person == this.nuevo);
    if(exite.length==0)
    {
      if(this.nuevo.nombre!='')
      {
        this.dbzService.agregarPersonaje(this.nuevo)
      }
    }
  }
}

