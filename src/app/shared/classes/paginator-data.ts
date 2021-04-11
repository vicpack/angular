import { environment } from "src/environments/environment";

export abstract class PaginatorData {
    abstract data: any[];
    dataByPage: any = [];
    pageSize: number = environment.pageSize;

    loadData(page: number = 0) {
        this.dataByPage = this.data.slice(page * this.pageSize, page * this.pageSize + this.pageSize);
    }

    userChangedPage(page: number) {
        this.loadData(page);//enviar el valor a una salida
    }


}