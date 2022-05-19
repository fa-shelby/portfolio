import { Component, OnInit } from '@angular/core';
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Page d\'accueil - Portfolio en webdevelopment - Fabienne Benoit';

  constructor(private titleService:Title, private metaService: Meta) {
    this.addTag();
  }

  addTag() {
    this.metaService.addTag({ name: 'description', content: 'Portfolio de Fabienne Benoit, étudiante en développement web. Passionnée et motivée, venez découvrir qui je suis et ce que je peux faire pour vous.' });
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}
