import { Component, Input, OnInit } from '@angular/core';
import {provideRoutes} from "@angular/router";

@Component({
  selector: 'app-up',
  templateUrl: './up.component.html',
  styleUrls: ['./up.component.css']
})
export class UpComponent implements OnInit {

  @Input() anchor = '';
  @Input() page = '';

  constructor() {  }

  ngOnInit(): void {
  }

}
