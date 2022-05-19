import { Component, OnInit } from '@angular/core';
import { Work } from "../shared/model/work.model";
import { WorkService } from "../shared/work.service";
import { Title } from '@angular/platform-browser';
import {TitleService} from "../shared/title.service";

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

  constructor(private workService: WorkService, private titleService:Title) { }

  ngOnInit(): void {
    this.work = new Work(1, 'Art', 'Travail réalisé en HTML et CSS dans le cadre du cours de création de sites web statiques.', 'Reproduction d’une page sur l’art comportant plusieurs largeurs de contenu et positions.');
    this.workService.getAllWorks()
      .subscribe(response => {
        this.works = response.body ?? [];
      })

    this.titleService.setTitle(this.title);
  }

}
