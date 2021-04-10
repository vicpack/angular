import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from 'src/app/shared/services/meta-data-column';
@Component({
  selector: 'amb-list-drivers',
  templateUrl: './list-drivers.component.html',
  styleUrls: ['./list-drivers.component.css']
})
export class ListDriversComponent implements OnInit {
  //listFields: string[] = ['nombre', 'apellido', 'licencia'];
  metaDataColumns: MetaDataColumn[] = [
    { field: "nombre", title: "Nombre Principal" },
    { field: "apellido", title: "Apellido Paterno" },
    { field: "licencia", title: "Licencia de conducir" }
  ];

  data: any = [
    { nombre: 'Carlos', apellido: 'Trejo', licencia: 'Piloto' },
    { nombre: 'Monica', apellido: 'Jimenez', licencia: 'Doctora' },
    { nombre: 'Victor', apellido: 'Morales', licencia: 'Piloto' },
    { nombre: 'Michelle', apellido: 'Mendez', licencia: 'Doctora' },
    { nombre: 'Carlos', apellido: 'Trejo', licencia: 'Piloto' },
    { nombre: 'Monica', apellido: 'Jimenez', licencia: 'Doctora' },
    { nombre: 'Victor', apellido: 'Morales', licencia: 'Piloto' },
    { nombre: 'Michelle', apellido: 'Mendez', licencia: 'Doctora' },
    { nombre: 'Carlos', apellido: 'Trejo', licencia: 'Piloto' },
    { nombre: 'Monica', apellido: 'Jimenez', licencia: 'Doctora' },
    { nombre: 'Victor', apellido: 'Morales', licencia: 'Piloto' },
    { nombre: 'Michelle', apellido: 'Mendez', licencia: 'Doctora' },
    { nombre: 'Carlos', apellido: 'Trejo', licencia: 'Piloto' },
    { nombre: 'Monica', apellido: 'Jimenez', licencia: 'Doctora' },
    { nombre: 'Victor', apellido: 'Morales', licencia: 'Piloto' },
    { nombre: 'Michelle', apellido: 'Mendez', licencia: 'Doctora' },
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
