import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title = 'À propos de moi - Portfolio en webdevelopment - Fabienne Benoit';

  constructor(private titleService:Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}
