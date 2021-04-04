import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'amb-list-histories',
  templateUrl: './list-histories.component.html',
  styleUrls: ['./list-histories.component.css']
})
export class ListHistoriesComponent implements OnInit {
  listFields: string[] = ['nhistoria', 'paciente', "medico"];
  data: any = [
    { nhistoria: "12345", paciente: "Leonel Messi", medico: "Dr House" },
    { nhistoria: "12345", paciente: "Leonel Messi", medico: "Dr House" },
    { nhistoria: "12345", paciente: "Leonel Messi", medico: "Dr House" },
    { nhistoria: "12345", paciente: "Leonel Messi", medico: "Dr House" },
    { nhistoria: "12345", paciente: "Leonel Messi", medico: "Dr House" },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
