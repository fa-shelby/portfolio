import { Component, OnInit } from '@angular/core';
import { Service } from "../shared/model/service.model";
import { ServiceService } from "../shared/service.service";
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  title = 'Services et compétences - Portfolio en webdevelopment - Fabienne Benoit';

  service?: Service; // Le ? signifie qu'il peut être undefined
  services: Service[] = [];

  constructor( private serviceService: ServiceService, private titleService: Title) { }

  ngOnInit(): void {
    this.service = new Service(1, 'Création de sites', 'Réalisation de sites web statiques en HTML5 et CSS3 sur base d’un modèle (image du résultat désiré) ou d’une maquette.', 'Image', 1);
    this.serviceService.getAllServices()
      .subscribe(response => {
        this.services = response.body ?? [];
      })

    this.titleService.setTitle(this.title);
  }
}
