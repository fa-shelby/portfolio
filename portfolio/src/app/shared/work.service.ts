import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { Work } from "./model/work.model";
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class WorkService {

  private ressourceUrl = environment.apiUrl + '?type=works';

  constructor(private http: HttpClient) { }

  getAllWorks(): Observable<HttpResponse<Work[]>>{
   return this.http.get<Work[]>(this.ressourceUrl, {observe: 'response', headers: this.getHeaders()});
  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/json');
    return headers;
  }
}
