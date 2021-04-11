import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MetaDataColumn } from '../../../../shared/services/meta-data-column';
import { PaginatorData } from '../../../../shared/classes/paginator-data';

@Component({
  selector: 'amb-list-histories',
  templateUrl: './list-histories.component.html',
  styleUrls: ['./list-histories.component.css']
})
export class ListHistoriesComponent extends PaginatorData implements OnInit {
  //listFields: string[] = ['nhistoria', 'paciente', "medico"];
  metaDataColumns: MetaDataColumn[] = [
    { field: 'nHistoria', title: 'Nro.Historia' },
    { field: 'paciente', title: 'Nombre del paciente' },
    { field: 'medico', title: 'Nombre del médico' },
  ];
  data: any = [
    { nhistoria: "12345", paciente: "Leonel Messi", medico: "Dr House" },
    { nhistoria: "12345", paciente: "Cristiano Ronaldo", medico: "Dra Queen" },
    { nhistoria: "12345", paciente: "Tony Stark", medico: "Dr Strange" },
    { nhistoria: "12345", paciente: "Luisito Rey", medico: "Dr Simi" },
    { nhistoria: "12345", paciente: "Jordan Love", medico: "Dr Sonrisas" },
    { nhistoria: "12345", paciente: "Leonel Messi", medico: "Dr House" },
    { nhistoria: "12345", paciente: "Cristiano Ronaldo", medico: "Dra Queen" },
    { nhistoria: "12345", paciente: "Tony Stark", medico: "Dr Strange" },
    { nhistoria: "12345", paciente: "Luisito Rey", medico: "Dr Simi" },
    { nhistoria: "12345", paciente: "Jordan Love", medico: "Dr Sonrisas" },
    { nhistoria: "12345", paciente: "Leonel Messi", medico: "Dr House" },
    { nhistoria: "12345", paciente: "Cristiano Ronaldo", medico: "Dra Queen" },
    { nhistoria: "12345", paciente: "Tony Stark", medico: "Dr Strange" },
    { nhistoria: "12345", paciente: "Luisito Rey", medico: "Dr Simi" },
    { nhistoria: "12345", paciente: "Jordan Love", medico: "Dr Sonrisas" },
  ];


  constructor() {
    super();
  }

  ngOnInit(): void {
    this.loadData();
  }


}
