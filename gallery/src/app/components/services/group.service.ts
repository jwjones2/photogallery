import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Group } from "./group";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

// we can now access environment.apiUrl
const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class GroupService {
    groupsUrl = '/groups';  // URL to web api

    constructor(
        private http: HttpClient
    )
    {}

  getGroup ( id: number ): Observable<Group> {
    return this.http
      .get<Group>(API_URL + this.groupsUrl + '/' + id);
  } 

  getGroups (): Observable<Group[]> {
    return this.http
      .get(API_URL + this.groupsUrl)
      .pipe(map(response => response['data']));
  }

  public updateGroup(group: Group): Observable<Group> {
    return this.http.put<Group>(`${API_URL + this.groupsUrl}/${group.id}`,group);
  }
}
