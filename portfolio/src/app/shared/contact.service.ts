import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { Contact } from "./model/contact.model";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  private ressourceUrl = environment.apiUrl + '?type=contacts'; // Besoin de  + '?type=contacts' ?

  constructor(private http: HttpClient) { }

  createContact(contact: Contact) : Observable<HttpResponse<Contact>>{
    return this.http.post<Contact>(this.ressourceUrl, contact, {observe: 'response', headers: this.getHeaders()});
  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');

    return headers;
  }
}


