import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMedicsComponent } from './presentation/views/list-medics/list-medics.component';

const routes: Routes = [
  { path: "list", component: ListMedicsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicsRoutingModule { }
