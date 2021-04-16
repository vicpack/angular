import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Paginator } from 'src/app/shared/classes/paginator';
import { PaginatorComponent } from 'src/app/shared/components/paginator/paginator.component';
import { MetaDataColumn } from 'src/app/shared/services/meta-data-column';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { environment } from 'src/environments/environment';
import { PaginatorData } from '../../../../shared/classes/paginator-data';
import { FormDriverComponent } from '../form-driver/form-driver.component';
@Component({
  selector: 'amb-list-drivers',
  templateUrl: './list-drivers.component.html',
  styleUrls: ['./list-drivers.component.css']
})
export class ListDriversComponent extends PaginatorData implements OnInit {
  //listFields: string[] = ['nombre', 'apellido', 'licencia'];
  @ViewChild(PaginatorComponent) paginatorComponent: PaginatorComponent | undefined;
  metaDataColumns: MetaDataColumn[] = [
    { field: "id", title: "ID" },
    { field: "nombre", title: "Nombre Principal" },
    { field: "apellido", title: "Apellido Paterno" },
    { field: "licencia", title: "Licencia de conducir" }
  ];

  data: any = [
    { id: 1, nombre: 'Carlos', apellido: 'Trejo', licencia: 'Piloto' },
    { id: 2, nombre: 'Monica', apellido: 'Jimenez', licencia: 'Doctora' },
    { id: 3, nombre: 'Victor', apellido: 'Morales', licencia: 'Piloto' },
    { id: 4, nombre: 'Michelle', apellido: 'Mendez', licencia: 'Doctora' },
    { id: 5, nombre: 'Carlos', apellido: 'Trejo', licencia: 'Piloto' },
    { id: 6, nombre: 'Monica', apellido: 'Jimenez', licencia: 'Doctora' },
    { id: 7, nombre: 'Victor', apellido: 'Morales', licencia: 'Piloto' },
    { id: 8, nombre: 'Michelle', apellido: 'Mendez', licencia: 'Doctora' },
    { id: 9, nombre: 'Carlos', apellido: 'Trejo', licencia: 'Piloto' },
    { id: 10, nombre: 'Monica', apellido: 'Jimenez', licencia: 'Doctora' },
    { id: 11, nombre: 'Victor', apellido: 'Morales', licencia: 'Piloto' },
    { id: 12, nombre: 'Michelle', apellido: 'Mendez', licencia: 'Doctora' },
    { id: 13, nombre: 'Carlos', apellido: 'Trejo', licencia: 'Piloto' },
    { id: 14, nombre: 'Monica', apellido: 'Jimenez', licencia: 'Doctora' },
    { id: 15, nombre: 'Victor', apellido: 'Morales', licencia: 'Piloto' },
    { id: 16, nombre: 'Michelle', apellido: 'Mendez', licencia: 'Doctora' },
  ];

  constructor(private readonly utils: UtilsService) {
    super();
  }

  ngOnInit(): void {
    this.loadData();
  }

  delete(record: any) {
    const observableConfirm: Observable<string> = this.utils.confirm(`¿Realmente quiere eliminar "${record.nombre} ${record.apellido}"?`);


    observableConfirm.subscribe((response: string) => {
      if (!response) {
        return;
      }
      const matchedRecord = this.data.findIndex((el: any) => el.id === record.id);
      this.data.splice(matchedRecord, 1);
      const totalRecordsInCurrentPage = this.data.slice(this.currentPage * environment.pageSize, this.currentPage * environment.pageSize + environment.pageSize)

      if (totalRecordsInCurrentPage.length > 0) {
        this.loadData(this.currentPage);
      } else if (this.currentPage > 0) {
        (this.paginatorComponent as PaginatorComponent).goToPage(this.currentPage - 1);
        this.loadData(this.currentPage - 1);
      } else {
        (this.paginatorComponent as PaginatorComponent).goToPage(0);
        this.loadData();
      }
    });

  }

  edit(record: any) {
    this.utils.openModal(FormDriverComponent, {});
  }
}
