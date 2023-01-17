import { Component, OnInit } from '@angular/core';
import { ApiusersService } from 'src/app/service/apiusers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  CODIGO!:String;
  ID!:String;
  NOMBRE!:String;
  NombreUsuario!:string;
  EMAIL!:String;
  titulo!:string;
  arrayusers:any = [];
  constructor(private Lista:ApiusersService) { }

  ngOnInit(): void {
  //  this.mostrar()
  this.titulo = this.Lista.title
  }

  mostrar(){
    this.CODIGO="Codigo";
    this.ID="ID"
   this.NOMBRE="NOMBRE"
  this.NombreUsuario="NombreUsuario"
  this.EMAIL="EMAIL"

    this.Lista.getMostrarUsuarios().subscribe(
      resultado => {
        console.log(resultado)
        this.arrayusers = resultado
      }, err =>{
        console.log('error')
      });

  }

  

}
