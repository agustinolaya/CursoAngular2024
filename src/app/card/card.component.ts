import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{

  public image:string="https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg";
  public Titulo:string = "Curso de Angular con Interpolación"
  constructor(){

  }

  ngOnInit(): void {
    
  }

}
