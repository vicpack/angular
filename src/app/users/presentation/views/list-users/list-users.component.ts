import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from 'src/app/shared/services/meta-data-column';

@Component({
  selector: 'amb-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  metaDataColumns: MetaDataColumn[] = [
    { field: "nombre", title: "Nombre completo" },
    { field: "correo", title: "Correo" },
    { field: "roles", title: "Roles" },
  ];
  data: any = [
    { nombre: "Carlos", correo: "carlos@banorte.com", roles: "operador" },
    { nombre: "Carlos", correo: "carlos@banorte.com", roles: "operador" },
    { nombre: "Carlos", correo: "carlos@banorte.com", roles: "operador" },
    { nombre: "Carlos", correo: "carlos@banorte.com", roles: "operador" },
    { nombre: "Carlos", correo: "carlos@banorte.com", roles: "operador" },
    { nombre: "Carlos", correo: "carlos@banorte.com", roles: "operador" },
    { nombre: "Carlos", correo: "carlos@banorte.com", roles: "operador" },
    { nombre: "Carlos", correo: "carlos@banorte.com", roles: "operador" },
    { nombre: "Carlos", correo: "carlos@banorte.com", roles: "operador" },
    { nombre: "Carlos", correo: "carlos@banorte.com", roles: "operador" },
    { nombre: "Carlos", correo: "carlos@banorte.com", roles: "operador" },
    { nombre: "Carlos", correo: "carlos@banorte.com", roles: "operador" },

  ];
  dataByPage: any = []
  constructor() { }

  ngOnInit(): void {
    this.loadData();
  }


  loadData(page: number = 0) {
    this.dataByPage = this.data.slice(page * 10, page * 10 + 10);
  }

  changePage(evt: { length: number; pageIndex: number; pageSize: number; previousPageIndex?: number; }) {
    this.loadData(evt.pageIndex);
  }
}
