import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const API_URL: string = 'http://localhost:8000/api';
const httpOptions = {
  headers: new HttpHeaders({
    'Origin': 'localhost'
  })
};

export interface Group {
  id          : number,
  name        : string,
  description : string
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getGroups() {
    return this.httpClient.get<Group[]>(API_URL + '/groups', httpOptions);
  }
}
