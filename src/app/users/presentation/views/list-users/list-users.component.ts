import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginatorData } from 'src/app/shared/classes/paginator-data';
import { MetaDataColumn } from 'src/app/shared/services/meta-data-column';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'amb-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent extends PaginatorData implements OnInit {
  metaDataColumns: MetaDataColumn[] = [
    { field: "id", title: "ID" },
    { field: "nombre", title: "Nombre completo" },
    { field: "correo", title: "Correo" },
    { field: "roles", title: "Roles" },
  ];
  data: any = [
    { id: 1, nombre: "Carlos", correo: "carlos@banorte.com", roles: "operador" },
    { id: 2, nombre: "Carlos", correo: "carlos@banorte.com", roles: "operador" },
    { id: 3, nombre: "Carlos", correo: "carlos@banorte.com", roles: "operador" },
    { id: 4, nombre: "Carlos", correo: "carlos@banorte.com", roles: "operador" },
    { id: 5, nombre: "Carlos", correo: "carlos@banorte.com", roles: "operador" },
    { id: 6, nombre: "Carlos", correo: "carlos@banorte.com", roles: "operador" },
    { id: 7, nombre: "Carlos", correo: "carlos@banorte.com", roles: "operador" },
    { id: 8, nombre: "Carlos", correo: "carlos@banorte.com", roles: "operador" },
    { id: 9, nombre: "Carlos", correo: "carlos@banorte.com", roles: "operador" },
    { id: 10, nombre: "Carlos", correo: "carlos@banorte.com", roles: "operador" },
    { id: 11, nombre: "Carlos", correo: "carlos@banorte.com", roles: "operador" },
    { id: 12, nombre: "Carlos", correo: "carlos@banorte.com", roles: "operador" },
    { id: 13, nombre: "Carlos", correo: "carlos@banorte.com", roles: "operador" },
    { id: 14, nombre: "Carlos", correo: "carlos@banorte.com", roles: "operador" },
    { id: 15, nombre: "Carlos", correo: "carlos@banorte.com", roles: "operador" },
    { id: 16, nombre: "Carlos", correo: "carlos@banorte.com", roles: "operador" },
    { id: 17, nombre: "Carlos", correo: "carlos@banorte.com", roles: "operador" },
    { id: 18, nombre: "Carlos", correo: "carlos@banorte.com", roles: "operador" },
    { id: 19, nombre: "Carlos", correo: "carlos@banorte.com", roles: "operador" },
    { id: 20, nombre: "Carlos", correo: "carlos@banorte.com", roles: "operador" },
    { id: 21, nombre: "Carlos", correo: "carlos@banorte.com", roles: "operador" },
    { id: 22, nombre: "Carlos", correo: "carlos@banorte.com", roles: "operador" },
  ];

  pageSize: number = environment.pageSizeUser;
  constructor(private readonly utils: UtilsService) {
    super();
  }

  delete(record: any) {
    const observableConfirm: Observable<string> = this.utils.confirm(`¿Realmente quiere eliminar "${record.nombre}"?`);


    observableConfirm.subscribe((response: string) => {
      if (!response) {
        return;
      }
      const matchedRecord = this.data.findIndex((el: any) => el.id === record.id);
      this.data.splice(matchedRecord, 1);
      this.loadData();

    });

  }
  ngOnInit(): void {
    this.loadData();
  }
}
