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
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { KeypadComponent } from './components/keypad/keypad.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};
@NgModule({
  declarations: [TitleComponent, ContainerComponent, TableComponent, PaginatorComponent, ConfirmComponent, KeypadComponent],
  imports: [
    CommonModule, MatToolbarModule, MatIconModule, FlexLayoutModule,
    MatCardModule, MatTableModule, MatPaginatorModule, PerfectScrollbarModule, MatButtonModule, MatDialogModule, MatTooltipModule
  ],
  exports: [TitleComponent, ContainerComponent, TableComponent, MatTableModule, MatButtonModule, MatIconModule, MatTooltipModule,
    PerfectScrollbarModule, MatPaginatorModule, PaginatorComponent, MatDialogModule, ConfirmComponent, MatToolbarModule, FlexLayoutModule,
    ReactiveFormsModule, MatFormFieldModule, MatInputModule, KeypadComponent, MatTooltipModule],
  providers: [{
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
  }]
})
export class SharedModule { }
