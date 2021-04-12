import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MetaDataColumn } from '../../../../shared/services/meta-data-column';
import { PaginatorData } from '../../../../shared/classes/paginator-data';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'amb-list-histories',
  templateUrl: './list-histories.component.html',
  styleUrls: ['./list-histories.component.css']
})
export class ListHistoriesComponent extends PaginatorData implements OnInit {
  //listFields: string[] = ['nhistoria', 'paciente', "medico"];
  metaDataColumns: MetaDataColumn[] = [
    { field: 'id', title: 'ID' },
    { field: 'paciente', title: 'Nombre del paciente' },
    { field: 'medico', title: 'Nombre del médico' },
  ];
  data: any = [
    { id: "1", paciente: "Leonel Messi", medico: "Dr House" },
    { id: "2", paciente: "Leonel Messi", medico: "Dr House" },
    { id: "3", paciente: "Leonel Messi", medico: "Dr House" },
    { id: "4", paciente: "Leonel Messi", medico: "Dr House" },
    { id: "5", paciente: "Leonel Messi", medico: "Dr House" },
    { id: "6", paciente: "Leonel Messi", medico: "Dr House" },
    { id: "7", paciente: "Leonel Messi", medico: "Dr House" },
    { id: "8", paciente: "Leonel Messi", medico: "Dr House" },
    { id: "9", paciente: "Leonel Messi", medico: "Dr House" },
    { id: "10", paciente: "Leonel Messi", medico: "Dr House" },
    { id: "11", paciente: "Leonel Messi", medico: "Dr House" },
    { id: "12", paciente: "Leonel Messi", medico: "Dr House" },
    { id: "13", paciente: "Leonel Messi", medico: "Dr House" },
    { id: "14", paciente: "Leonel Messi", medico: "Dr House" },



  ];


  constructor(private readonly utils: UtilsService) {
    super();
  }



  delete(record: any) {
    const reference: any = this.utils.confirm("¿Realmente quiere eliminar?");


    reference.afterClosed().subscribe((response: any) => {
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
