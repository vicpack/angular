import { Injectable } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material/paginator";
@Injectable()
export class Paginator extends MatPaginatorIntl {
    itemsPerPageLabel = "Items por página";
    nextPageLabel = "Siguiente página";
    lastPageLabel = "Última página";
    prevPageLabel = "Página anterior";

    constructor() {
        super();// para llamar al constructor de la clase que estoy heredando
    }
}
