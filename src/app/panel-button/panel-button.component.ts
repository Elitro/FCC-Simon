import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'panel-button',
  templateUrl: './panel-button.component.html',
  styleUrls: ['./panel-button.component.css']
})
export class PanelButtonComponent implements OnInit {

  @Input() panelColor: string;

  constructor() { }

  ngOnInit() {
  }

}
