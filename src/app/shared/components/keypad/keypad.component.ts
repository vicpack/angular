import { Component, Input, OnInit } from '@angular/core';
import { KeyPadButton } from '../interfaces/keybutton.interface';

@Component({
  selector: 'amb-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {
  @Input() keypadButtons: KeyPadButton[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  actions(act: string) { }
}
