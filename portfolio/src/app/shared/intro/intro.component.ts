import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  @Input()  intro = {
    title: '',
    title2: '',
    text: '',
    text2: ''
  };

  @Input() page = '';

  constructor() { }

  ngOnInit(): void {
  }

}
