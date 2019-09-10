import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Group } from "./group";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL: string = 'http://localhost:8000/';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
    groupsUrl = 'api/groups';  // URL to web api

    constructor(
        private http: HttpClient
    )
    {}

  getGroups (): Observable<Group[]> {
    return this.http
      .get(API_URL + this.groupsUrl)
      .pipe(map(response => response['data']));
  }
}
