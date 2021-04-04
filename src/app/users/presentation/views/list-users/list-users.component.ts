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

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
