import { Component, OnInit } from '@angular/core';

interface IMenu {
  title: string
  url: string
}
@Component({
  selector: 'amb-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  listMenu: IMenu[] = [
    { title: "Resumen", url: "/dashboard" },
    { title: "Historias", url: "/histories" },
    { title: "Médicos", url: "/medics" },
    { title: "Pilotos", url: "/drivers" },
    { title: "Usuarios", url: "/users" },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
