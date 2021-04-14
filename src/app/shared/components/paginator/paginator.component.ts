import { Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'amb-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Input() totalRecords: number = 0;
  @Input() pageSize: number = environment.pageSize;
  @Output() onDataChanged: EventEmitter<number> = new EventEmitter<number>(); //decimos que es un evento
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  changePage(evt: { length: number; pageIndex: number; pageSize: number; previousPageIndex?: number; }) {
    this.onDataChanged.emit(evt.pageIndex); // para mandar la salida
  }

  goToPage(page: number) {
    (this.paginator as MatPaginator).pageIndex = page;
  }

}
