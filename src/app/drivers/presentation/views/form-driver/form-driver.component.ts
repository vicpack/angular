import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'amb-form-driver',
  templateUrl: './form-driver.component.html',
  styleUrls: ['./form-driver.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormDriverComponent implements OnInit {
  title: string = "";
  fg: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any) {
    this.fg = new FormGroup({
      nombre: new FormControl(this.data?.nombre, Validators.required),
      apellido: new FormControl(this.data?.apellido, Validators.required),
      licencia: new FormControl(this.data?.licencia, Validators.required),
    });
  }

  ngOnInit(): void {
    this.title = this.data ? "Edición" : "Nuevo";
  }

  save() {
    if (this.fg.valid) {
      console.log("Grabar en la BD");
    } else {
      console.log("campos inválidos");
    }

  }

}
