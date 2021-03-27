import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../../shared/services/menu.service';
import { IMenu } from '../../../../shared/services/menu.interface';

/*interface IMenu {
  title: string
  url: string
}*/
@Component({
  selector: 'amb-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  /* listMenu: IMenu[] = [
     { title: "Resumen", url: "/dashboard" },
     { title: "Historias", url: "/histories" },
     { title: "Médicos", url: "/medics" },
     { title: "Pilotos", url: "/drivers" },
     { title: "Usuarios", url: "/users" },
   ];*/

  listMenu: IMenu[] = [];

  constructor(private menuService: MenuService) {
    this.listMenu = this.menuService.getListMenu(); // para invocar el Menú desde un servicio
  }

  ngOnInit(): void {
  }

}
