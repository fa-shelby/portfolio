import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { Details } from "./model/details.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class DetailsService {

  private ressourceUrl = environment.apiUrl + '?type=details';

  constructor(private http: HttpClient) { }

  getAllDetails(): Observable<HttpResponse<Details[]>>{
    return this.http.get<Details[]>(this.ressourceUrl, {observe: 'response', headers: this.getHeaders()});
  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/json');
    return headers;
  }
}
