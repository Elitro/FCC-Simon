import { Generic } from './../app.domain';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'panel-button',
  templateUrl: './panel-button.component.html',
  styleUrls: ['./panel-button.component.css']
})
export class PanelButtonComponent implements OnInit {

  @Input() panel: Generic.Type.Panel;
  audio: any;

  constructor() {
    this.audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
  }

  ngOnInit() {
  }

  playAudio() {
    this.audio.play();
  }

}
