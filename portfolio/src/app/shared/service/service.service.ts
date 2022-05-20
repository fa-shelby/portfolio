import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { Service } from "../model/service.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  private ressourceUrl = environment.apiUrl + '?type=services';

  constructor(private http: HttpClient) { }

  getAllServices(): Observable<HttpResponse<Service[]>>{
    return this.http.get<Service[]>(this.ressourceUrl, {observe: 'response', headers: this.getHeaders()});
  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/json');
    return headers;
  }
}
