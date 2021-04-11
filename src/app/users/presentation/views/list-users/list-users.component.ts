import { Component, OnInit } from '@angular/core';
import { PaginatorData } from 'src/app/shared/classes/paginator-data';
import { MetaDataColumn } from 'src/app/shared/services/meta-data-column';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'amb-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent extends PaginatorData implements OnInit {
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

  pageSize: number = environment.pageSizeUser;
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.loadData();
  }
}
