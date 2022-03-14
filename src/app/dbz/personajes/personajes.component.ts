import { Component, Input, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  //@Input() personajesDelHijo:any[]=[]

  constructor(private DbzServicio:DbzService)
  {

  }

  get personajesDelHijo(){
return this.DbzServicio.personajes;
  }


}
