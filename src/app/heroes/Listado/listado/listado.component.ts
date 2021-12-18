import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  heroes: string[] = ['Spiderman', 'Superman', 'IronMan', 'Doctor Strange', 'Star Lord', 'Logan'];
  eliminado: string = "";

  eliminarHeroe(){
    if(this.heroes.length == 0){
      this.eliminado = '';
    } else{
      this.eliminado = this.heroes[0];
    }
    this.heroes.splice(0,1);
  }

}
