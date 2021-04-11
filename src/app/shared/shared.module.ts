import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContainerComponent } from './components/container/container.component';
import { MatCardModule } from '@angular/material/card';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PaginatorComponent } from './components/paginator/paginator.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};
@NgModule({
  declarations: [TitleComponent, ContainerComponent, TableComponent, PaginatorComponent],
  imports: [
    CommonModule, MatToolbarModule, MatIconModule, FlexLayoutModule,
    MatCardModule, MatTableModule, MatPaginatorModule, PerfectScrollbarModule
  ],
  exports: [TitleComponent, ContainerComponent, TableComponent, MatTableModule, MatButtonModule, MatIconModule, MatTooltipModule,
    PerfectScrollbarModule, MatPaginatorModule, PaginatorComponent,],
  providers: [{
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
  }]
})
export class SharedModule { }
