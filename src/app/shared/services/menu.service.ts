import { Injectable } from '@angular/core';
import { IMenu } from './menu.interface';
import { LogService } from './log.service';

@Injectable({
    providedIn: 'root', // con esto la instancia ya es global y no es necesario registrarla en el app module
})
export class MenuService {
    private listMenu: IMenu[] = [ //campos
        { title: "Resumen", url: "/dashboard", icon: "tablero" },
        { title: "Historias", url: "/histories", icon: "historia" },
        { title: "Médicos", url: "/medics", icon: "medico" },
        { title: "Pilotos", url: "/drivers", icon: "piloto" },
        { title: "Usuarios", url: "/users", icon: "usuario" },
    ];

    constructor(private LogService: LogService) {

    }
    getListMenu(): IMenu[] {
        /*const list: IMenu[] = [...this.listMenu];
        return list;*/
        this.LogService.writeTolog("get list menu");
        return [...this.listMenu];
    }

    getDataPath(path: string): Partial<IMenu> {
        const elementMatched = this.listMenu.find(el => path.toLowerCase().indexOf(el.url.toLowerCase()) > -1);
        return {
            title: elementMatched?.title,
            icon: elementMatched?.icon,
        };
    }
}