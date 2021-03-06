import { Component, OnInit } from '@angular/core';
import { Service } from "../shared/model/service.model";
import { ServiceService } from "../shared/service/service.service";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  title = 'Services et compétences - Portfolio en webdevelopment - Fabienne Benoit';

  intro = {
    title: 'Mes Services et ',
    title2: 'Compétences',
    text: 'Actuellement en cours de formation, vous trouverez dans cette section les services que je peux déjà vous rendre ainsi que les compétences que je suis en train d’acquérir et d’approfondir.',
    text2: ''
  };

  page = 'services';
  anchor = '/page/services#';

  service?: Service; // Le ? signifie qu'il peut être undefined
  services: Service[] = [];

  constructor( private serviceService: ServiceService, private titleService: Title, private metaService: Meta) {
    this.addTag();
  }

  addTag() {
    this.metaService.addTag({ name: 'description', content: 'Portfolio de Fabienne Benoit, étudiante en développement web. Envie de savoir ce que je peux faire pour vous ? Je vous en dis plus ici sur mes compétences.' });
  }

  ngOnInit(): void {
    this.service = new Service(1, 'Création de sites', 'Réalisation de sites web statiques en HTML5 et CSS3 sur base d’un modèle (image du résultat désiré) ou d’une maquette.', 'Image', 1);
    this.serviceService.getAllServices()
      .subscribe(response => {
        this.services = response.body ?? [];
      })

    this.titleService.setTitle(this.title);
  }
}
