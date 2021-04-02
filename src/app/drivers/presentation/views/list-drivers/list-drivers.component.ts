import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'amb-list-drivers',
  templateUrl: './list-drivers.component.html',
  styleUrls: ['./list-drivers.component.css']
})
export class ListDriversComponent implements OnInit {
  listFields: string[] = ['nombre', 'apellido', 'licencia'];
  data: any = [
    { nombre: 'Carlos', apellido: 'Trejo', licencia: 'Piloto' },
    { nombre: 'Monica', apellido: 'Jimenez', licencia: 'Doctora' },
    { nombre: 'Victor', apellido: 'Morales', licencia: 'Piloto' },
    { nombre: 'Michelle', apellido: 'Mendez', licencia: 'Doctora' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
