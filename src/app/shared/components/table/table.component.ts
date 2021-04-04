import { ContentChildren } from '@angular/core';
import { QueryList } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { MatColumnDef, MatTable, MatTableDataSource } from '@angular/material/table';
import { MetaDataColumn } from '../../services/meta-data-column';

@Component({
  selector: 'amb-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data: any = [];
  @Input() metaDataColumns: MetaDataColumn[] = [];
  @ViewChild(MatTable, { static: true }) table: MatTable<any> | undefined;
  @ContentChildren(MatColumnDef, { descendants: true }) columnsDef: QueryList<MatColumnDef> | undefined
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
  //metodo que se ejecuta cuando el contenido de la etiqueta ngcontent haya cargado
  ngAfterContentInit() {
    if (!this.columnsDef) {
      return;
    }
    this.columnsDef.forEach(columnDef => this.table?.addColumnDef(columnDef));
    if (this.columnsDef.length) {
      this.listFields.push('actions');
    }
  }
}
