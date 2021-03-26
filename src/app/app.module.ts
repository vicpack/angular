import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing-module';



//interfase para las rutas
/**/
//importacion de modulos 
@NgModule({
  declarations: [AppComponent, ItemComponent],
  imports: [
    BrowserModule, CoreModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
