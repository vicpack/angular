import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'amb-list-medics',
  templateUrl: './list-medics.component.html',
  styleUrls: ['./list-medics.component.css']
})
export class ListMedicsComponent implements OnInit {
  listFields: string[] = ['cmp', 'nombre', "apellido", "especialidad", "localidad"];
  data: any = [
    { cmp: "123", nombre: "Gregory", apellido: "House", especialidad: "Cirujano", localidad: "Perú" },
    { cmp: "123", nombre: "Gregory", apellido: "House", especialidad: "Cirujano", localidad: "Perú" },
    { cmp: "123", nombre: "Gregory", apellido: "House", especialidad: "Cirujano", localidad: "Perú" },
    { cmp: "123", nombre: "Gregory", apellido: "House", especialidad: "Cirujano", localidad: "Perú" },
    { cmp: "123", nombre: "Gregory", apellido: "House", especialidad: "Cirujano", localidad: "Perú" },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
