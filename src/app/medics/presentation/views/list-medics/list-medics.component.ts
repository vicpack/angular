import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginatorData } from 'src/app/shared/classes/paginator-data';
import { MetaDataColumn } from 'src/app/shared/services/meta-data-column';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'amb-list-medics',
  templateUrl: './list-medics.component.html',
  styleUrls: ['./list-medics.component.css']
})
export class ListMedicsComponent extends PaginatorData implements OnInit {
  //listFields: string[] = ['cmp', 'nombre', "apellido", "especialidad", "localidad"];
  metaDataColumns: MetaDataColumn[] = [
    { field: "cmp", title: "Nro. Colegiatura" },
    { field: "nombre", title: "Nombre" },
    { field: "apellido", title: "Apellido" },
    { field: "especialidad", title: "Especialidad médica" },
    { field: "localidad", title: "Lugar de trabajo" }

  ];
  data: any = [
    { cmp: "1", nombre: "Gregory", apellido: "House", especialidad: "Cirujano", localidad: "Perú" },
    { cmp: "2", nombre: "Gregory", apellido: "House", especialidad: "Cirujano", localidad: "Perú" },
    { cmp: "3", nombre: "Gregory", apellido: "House", especialidad: "Cirujano", localidad: "Perú" },
    { cmp: "4", nombre: "Gregory", apellido: "House", especialidad: "Cirujano", localidad: "Perú" },
    { cmp: "5", nombre: "Gregory", apellido: "House", especialidad: "Cirujano", localidad: "Perú" },
    { cmp: "6", nombre: "Gregory", apellido: "House", especialidad: "Cirujano", localidad: "Perú" },
    { cmp: "7", nombre: "Gregory", apellido: "House", especialidad: "Cirujano", localidad: "Perú" },
    { cmp: "8", nombre: "Gregory", apellido: "House", especialidad: "Cirujano", localidad: "Perú" },
    { cmp: "9", nombre: "Gregory", apellido: "House", especialidad: "Cirujano", localidad: "Perú" },
    { cmp: "10", nombre: "Gregory", apellido: "House", especialidad: "Cirujano", localidad: "Perú" },
    { cmp: "11", nombre: "Gregory", apellido: "House", especialidad: "Cirujano", localidad: "Perú" },
    { cmp: "12", nombre: "Gregory", apellido: "House", especialidad: "Cirujano", localidad: "Perú" },
    { cmp: "13", nombre: "Gregory", apellido: "House", especialidad: "Cirujano", localidad: "Perú" },
    { cmp: "14", nombre: "Gregory", apellido: "House", especialidad: "Cirujano", localidad: "Perú" },
    { cmp: "15", nombre: "Gregory", apellido: "House", especialidad: "Cirujano", localidad: "Perú" },
    { cmp: "16", nombre: "Gregory", apellido: "House", especialidad: "Cirujano", localidad: "Perú" },
  ];

  constructor(private readonly utils: UtilsService) {
    super();
  }

  delete(record: any) {
    const observableConfirm: Observable<string> = this.utils.confirm(`¿Realmente quiere eliminar "${record.nombre} ${record.apellido}"?`);


    observableConfirm.subscribe((response: string) => {
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
