import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  // styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


  }

  @Input()
  $nombre: string = "Andrés";
  $numero: number = 19;
  $nombreNuevo: string = "Marina";

  // //Valores para ngModule
  nombre='';
  edad=0;


  cambiarNombre(){
    this.nombre = 'Antonio';
  }

  cambiarEdad(){
    this.edad = 30;
  }

  reiniciar(){
    this.nombre = '';
    this.edad = 0;
}
}
