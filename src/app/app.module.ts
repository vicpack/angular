import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { CoreModule } from './core/core.module';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './core/presentation/pages/page-login/page-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



//interfase para las rutas
const routes: Routes = [
  { path: '', component: PageLoginComponent },
  {
    path: 'medics', loadChildren: () =>
      import("./medics/medics.module").then(m => m.MedicsModule)
  },
  {
    path: 'histories', loadChildren: () =>
      import("./histories/histories.module").then(m => m.HistoriesModule)
  },
  {
    path: 'users', loadChildren: () =>
      import("./users/users.module").then(m => m.UsersModule)
  },
  {
    path: 'drivers', loadChildren: () =>
      import("./drivers/drivers.module").then(m => m.DriversModule)
  },
  {
    path: 'dashboard', loadChildren: () =>
      import("./dashboard/dashboard.module").then(m => m.DashboardModule)
  },
  {
    path: '**', redirectTo: ''
  },
  // { path: '**', component: PageLoginComponent },
];
//importacion de modulos 
@NgModule({
  declarations: [AppComponent, ItemComponent],
  imports: [
    BrowserModule,
    CoreModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,//metodo statico forRoot para las rutas
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
