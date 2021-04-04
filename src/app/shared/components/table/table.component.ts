import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MetaDataColumn } from '../../services/meta-data-column';

@Component({
  selector: 'amb-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data: any = [];
  @Input() metaDataColumns: MetaDataColumn[] = []

  listFields: string[] = [];

  dataSource: any;

  /*data = [
    { nombre: 'Nombre', apellido: 'Apellido' },
    { nombre: 'Nombre', apellido: 'Apellido' },
    { nombre: 'Nombre', apellido: 'Apellido' },
    { nombre: 'Nombre', apellido: 'Apellido' },
    { nombre: 'Nombre', apellido: 'Apellido' },
    { nombre: 'Nombre', apellido: 'Apellido' },
    { nombre: 'Nombre', apellido: 'Apellido' },
    { nombre: 'Nombre', apellido: 'Apellido' },
  ];*/
  constructor() { }

  ngOnInit(): void {
    this.listFields = this.metaDataColumns.map((el) => el.field);
    this.dataSource = new MatTableDataSource<any>(this.data);
  }

}
