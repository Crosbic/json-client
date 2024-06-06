import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {JsonModel} from "./json/json";

@Injectable({
  providedIn: 'root'
})
export class JsonService {
  private apiUrl = 'http://localhost:8080/json';

  constructor(private http: HttpClient) {}

  getJson(): Observable<JsonModel> {
    return this.http.get<JsonModel>(this.apiUrl);
  }

  updateJson(data: JsonModel): Observable<JsonModel> {
    return this.http.post<JsonModel>(this.apiUrl, data);
  }
}
