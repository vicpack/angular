import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MetaDataColumn } from '../../../../shared/services/meta-data-column';

@Component({
  selector: 'amb-list-histories',
  templateUrl: './list-histories.component.html',
  styleUrls: ['./list-histories.component.css']
})
export class ListHistoriesComponent implements OnInit {
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

  dataByPage: any = [];
  pageSize: number = environment.pageSize;
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
