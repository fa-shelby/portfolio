import { Component, OnInit } from '@angular/core';
import { Details } from "../shared/model/details.model";
import { Contact } from "../shared/model/contact.model";
import { DetailsService } from "../shared/service/details.service";
import { ContactService } from "../shared/service/contact.service";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title = 'Me contacter - Portfolio en webdevelopment - Fabienne Benoit';

  intro = {
    title: 'Me contacter',
    title2: '',
    text: 'Si mon profil vous intéresse, vous pouvez me joindre par mail, téléphone ou via le formulaire de contact ci-dessous.',
    text2: 'Je vous répondrai avec plaisir.'
  };

  page = 'contact';
  anchor = '/page/contact#';

  details: Details[] = [];

  contactForm = this.fb.group({
    lastname: ['', [Validators.required, Validators.maxLength(45)]],
    firstname: ['', [Validators.required, Validators.maxLength(45)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(45)]],
    message: ['', [Validators.required, Validators.maxLength(1000)]]
  });

  submitted = false;
  formSent = false;

  constructor(private detailsService: DetailsService, private contactService: ContactService, private titleService: Title, private metaService: Meta, private router: Router, private fb: FormBuilder) {
    this.addTag();
  }

  addTag() {
    this.metaService.addTag({ name: 'description', content: 'Portfolio de Fabienne Benoit, étudiante en développement web. Une question, un projet ? Contactez-moi pour en discuter.' });
  }

  ngOnInit(): void {

    this.detailsService.getAllDetails()
      .subscribe(response => {
        this.details = response.body ? response.body : [];
        console.log(this.details);
      })

    this.titleService.setTitle(this.title);

  }

  formSubmit() {

    this.submitted = true;

      if (this.contactForm.valid) {

      const contact = new Contact();
      contact.contact_firstname = this.contactForm.get('firstname')?.value;
      contact.contact_lastname = this.contactForm.get('lastname')?.value;
      contact.contact_email = this.contactForm.get('email')?.value;
      contact.contact_message = this.contactForm.get('message')?.value;

      // Créer le contact dans la DB
      this.contactService.createContact(contact)
        .subscribe(response => {
          this.formSent = true;
        });
    }
  }
}

/*
ngModel

 if (this.contact.contact_lastname && this.contact.contact_firstname && this.contact.contact_email && this.contact.contact_message) {
      this.contactService.createContact(this.contact)
        .subscribe(res => {
          console.log('Merci, le formulaire a bien été envoyé.');
        })
    }
 */

/*

Ma méthode
    // Reset form
      this.submitted = false; // Sans le submitted = false, les champs sont en rouge car valeurs invalides
      this.contactForm.reset();

    // Message de confirmation d'envoi du formulaire
    window.alert('Merci, votre message a bien été envoyé !');
 */
