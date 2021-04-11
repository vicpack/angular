import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from 'src/app/shared/services/meta-data-column';
import { environment } from 'src/environments/environment';

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
  dataByPage: any = [];
  pageSize: number = environment.pageSizeUser;
  constructor() { }

  ngOnInit(): void {
    this.loadData();
  }


  loadData(page: number = 0) {
    this.dataByPage = this.data.slice(page * this.pageSize, page * this.pageSize + this.pageSize);
  }

  userChangedPage(page: number) {
    this.loadData(page);//enviar el valor a una salida
  }
}
