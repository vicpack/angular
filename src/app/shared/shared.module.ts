import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [TitleComponent],
  imports: [
    CommonModule, MatToolbarModule, MatIconModule,
  ],
  exports: [TitleComponent, MatToolbarModule, MatIconModule]
})
export class SharedModule { }
