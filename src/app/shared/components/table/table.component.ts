import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'amb-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data: any = [];
  @Input() listFields: string[] = [];

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
    this.dataSource = new MatTableDataSource<any>(this.data);
  }

}
