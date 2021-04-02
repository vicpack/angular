import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing-module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { LogService } from './shared/services/log.service';
import { IconService } from './shared/services/icon.service';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
//interfase para las rutas
/**/
//importacion de modulos 
@NgModule({
  declarations: [AppComponent, ItemComponent],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatIconModule,
    FlexLayoutModule,
  ],
  providers: [
    LogService
    //{ provide: MenuService, useClass: MenuService }
  ],//los servicios se registran en los providers
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private IconService: IconService) { }//inyeccion de iconos service para crear la instancia
}
