import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'amb-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Input() totalRecords: number = 0;
  @Output() onDataChanged: EventEmitter<number> = new EventEmitter<number>(); //decimos que es un evento
  constructor() { }

  ngOnInit(): void {
  }
  changePage(evt: { length: number; pageIndex: number; pageSize: number; previousPageIndex?: number; }) {
    this.onDataChanged.emit(evt.pageIndex);
  }

}
