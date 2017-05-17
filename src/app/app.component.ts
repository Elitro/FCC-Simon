import { Generic } from './app.domain';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  panels: Array<Generic.Type.Panel> = [];

  constructor() {
    this.panels[0] = { color: '#B71C1C', sound: '' };
    this.panels[1] = { color: '#009688', sound: '' };
    this.panels[2] = { color: '#FFEB3B', sound: '' };
    this.panels[3] = { color: '#03A9F4', sound: '' };
  }
}
