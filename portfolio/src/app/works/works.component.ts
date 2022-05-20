import { Component, OnInit } from '@angular/core';
import { Work } from "../shared/model/work.model";
import { WorkService } from "../shared/service/work.service";
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})

export class WorksComponent implements OnInit {

  title = 'Travaux réalisés - Portfolio en webdevelopment - Fabienne Benoit';

  work?: Work;
  works: Work[] = [];

  intro = {
    title: 'Mes réalisations',
    title2: '',
    text: 'Dans cette section, vous trouverez un aperçu des travaux réalisés dans le cadre de ma formation en développement web.',
    text2: ''
  };

  page = 'works';
  anchor = '/page/works#';

  constructor(private workService: WorkService, private titleService:Title, private metaService: Meta) {
    this.addTag();
  }

  addTag() {
    this.metaService.addTag({ name: 'description', content: 'Portfolio de Fabienne Benoit, étudiante en développement web. Laissez-moi vous présenter mes derniers projets (pages web en HTML et CSS).' });
  }

  ngOnInit(): void {
    this.work = new Work(1, 'Art', 'Travail réalisé en HTML et CSS dans le cadre du cours de création de sites web statiques.', 'Reproduction d’une page sur l’art comportant plusieurs largeurs de contenu et positions.');
    this.workService.getAllWorks()
      .subscribe(response => {
        this.works = response.body ?? [];
      })

    this.titleService.setTitle(this.title);
  }

}
