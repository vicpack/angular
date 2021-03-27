import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './presentation/pages/page-login/page-login.component';
import { LoginComponent } from './presentation/views/login/login.component';
import { MenuComponent } from './presentation/views/menu/menu.component';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [PageLoginComponent, LoginComponent, MenuComponent],
  imports: [CommonModule, RouterModule, MatListModule, MatIconModule],
  exports: [PageLoginComponent, MenuComponent],
})
export class CoreModule { }
