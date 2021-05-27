import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = 'Alfredo Cabrera';
  nombre2:string = 'CaPitan AMERica';
  arreglo:number[] = [1,2,3,4,5,6,7,8,9,10];
  PI:number = Math.PI;
  porcentaje:number = 0.234; 
  salario:number = 1234.5;
  heroe = {
    nombre:'Logan',
    clave:'Wolverine',
    edad:50,
    direccion:{
      calle:'El dia',
      numero:1256
    }
  }
  //Promesa que resuelve un string
  valorPromesa = new Promise<string> ( (resolve) => {
    setTimeout( () => {
      resolve('Llego el dato')
    },4500)
  })
  fecha:Date = new Date();
  idioma:string = 'es';
  videoURL:string = 'https://www.youtube.com/embed/8jFAw5fKdnU';
  cambiaIdioma(cambioIdioma:string){
    this.idioma = cambioIdioma;
  }
}
