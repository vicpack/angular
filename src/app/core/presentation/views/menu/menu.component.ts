import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuService } from '../../../../shared/services/menu.service';
import { IMenu } from '../../../../shared/services/menu.interface';


@Component({
  selector: 'amb-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() onExpand: EventEmitter<boolean> = new EventEmitter<boolean>();

  listMenu: IMenu[] = [];
  expanded: boolean = true;
  constructor(private menuService: MenuService) {
    this.listMenu = this.menuService.getListMenu(); // para invocar el Menú desde un servicio
  }

  ngOnInit(): void {
  }

  sentExpand() {
    this.expanded = !this.expanded;
    this.onExpand.emit(this.expanded);
  }
}
