import {Component, Input, OnInit, Output} from '@angular/core';
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

  works: Work[] = [];

  intro = {
    title: 'Mes réalisations',
    title2: '',
    text: 'Dans cette section, vous trouverez un aperçu des travaux réalisés dans le cadre de ma formation en développement web.',
    text2: ''
  };

  anchor = '/page/works#';
  page = 'works';
  pages: number = 1;

  constructor(private workService: WorkService, private titleService:Title, private metaService: Meta) {
    this.addTag();
  }

  addTag() {
    this.metaService.addTag({ name: 'description', content: 'Portfolio de Fabienne Benoit, étudiante en développement web. Laissez-moi vous présenter mes derniers projets (pages web en HTML et CSS).' });
  }

  ngOnInit(): void {
    this.workService.getAllWorks()
      .subscribe(response => {
        this.works = response.body ?? [];
      })

    this.titleService.setTitle(this.title);
  }

}
