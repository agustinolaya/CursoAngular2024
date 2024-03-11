import { Component, OnInit } from '@angular/core';

// Una interface declara una serie de métodos y propiedades que deben ser implementados luego por una o más clases
interface Tarjeta{
  titulo:string;
  subtitulo:string;
  // El simbolo ? indica que puede recibir valores nulos
  nro?:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Miprimerapp';
  public ArregloTarjetas: Tarjeta[]=[];

  constructor(){

  }

  ngOnInit(): void {
    // Los arrays son objetos destinados a almacenar grupos de datos relacionados entre sí. Tienen sus propiedades y métodos específicos
    this.ArregloTarjetas = [
      {titulo:"Video 1", subtitulo:"Subtítulo Video 1", nro:5},
      {titulo:"Video 2", subtitulo:"Subtítulo Video 2", nro:6},
      {titulo:"Video 3", subtitulo:"Subtítulo Video 3", nro:7},
    ]
    
  }
}
