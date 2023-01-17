import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { InterceptoresService } from './service/interceptores.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    PagesModule
  ],
  providers: [/*OBJETO PARA IMPLEMENTAR INTERCEPTOR*/
    {provide:HTTP_INTERCEPTORS,/*http interceptor*/ 
      useClass:InterceptoresService,/*http clase*/ 
      multi:true/*El valor true es requerido*/
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
