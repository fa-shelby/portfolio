import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title = 'À propos de moi - Portfolio en webdevelopment - Fabienne Benoit';

  constructor(private titleService: Title, private metaService: Meta) {
    this.addTag();
  }

  addTag() {
    this.metaService.addTag({ name: 'description', content: 'Portfolio de Fabienne Benoit, étudiante en développement web. Cliquez ici pour faire ma connaissance et découvrir mon parcours atypique.' });
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}
