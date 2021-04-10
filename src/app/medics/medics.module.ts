import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicsRoutingModule } from './medics-routing.module';
import { PageMedicComponent } from './presentation/pages/page-medic/page-medic.component';
import { ListMedicsComponent } from './presentation/views/list-medics/list-medics.component';
import { SharedModule } from '../shared/shared.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
@NgModule({
  declarations: [PageMedicComponent, ListMedicsComponent],
  imports: [CommonModule, MedicsRoutingModule, SharedModule],
  exports: [PageMedicComponent, SharedModule],// para poder usarlo
})
export class MedicsModule { }
