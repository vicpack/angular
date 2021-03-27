import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing-module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

//interfase para las rutas
/**/
//importacion de modulos 
@NgModule({
  declarations: [AppComponent, ItemComponent],
  imports: [
    BrowserModule, CoreModule, AppRoutingModule, BrowserAnimationsModule, MatSidenavModule, MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
