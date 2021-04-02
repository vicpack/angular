import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMedicsComponent } from './presentation/views/list-medics/list-medics.component';
import { PageMedicComponent } from './presentation/pages/page-medic/page-medic.component';

const routes: Routes = [
  { path: "", component: PageMedicComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicsRoutingModule { }
