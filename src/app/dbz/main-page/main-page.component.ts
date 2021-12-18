import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/interfaces.module';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personaje1: Personaje = {
    nombre: 'Goku',
    poder: 100
  }

  personaje2: Personaje = {
    nombre: 'Vegetta',
    poder: 91
  };

  personaje3: Personaje = {
    nombre: 'Freezer',
    poder: 96
  };

  personaje4: Personaje = {
    nombre: 'Kame Sennin',
    poder: 90
  };

  personajes: Personaje[] = [this.personaje1, this.personaje2, this.personaje3, this.personaje4];

  agregarPersonaje(data: Personaje){
    this.personajes.push(data);
  }

}
