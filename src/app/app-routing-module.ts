import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './core/presentation/pages/page-login/page-login.component';

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
@NgModule({
    imports: [RouterModule.forRoot(routes)],//para recorrer las rutas
    exports: [RouterModule]
})

export class AppRoutingModule {

}