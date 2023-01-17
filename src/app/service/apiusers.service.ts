import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiusersService implements OnInit  {

  title='Listado de Usuarios';
  url='https://jsonplaceholder.typicode.com/users';
  
  constructor( private http:HttpClient) { }


  ngOnInit():void{
    this.getMostrarUsuarios();
  }

  getMostrarUsuarios(){
    return this.http.get<any>(this.url)
  }
}
