import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptoresService implements HttpInterceptor{

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>>{
    console.log('interceptado');
    
    const newReq = req.clone({setHeaders:{
      Authorization: 'Head 001'/** CABECERA */
    }})

    return next.handle(newReq);
  }
  constructor() { }
}
