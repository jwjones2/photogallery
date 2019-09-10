import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Hero } from './heroes/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getHeroes(): Observable<Hero[]>{
    this.messageService.add("HeroService: fetched heroes!");
    return this.http.get<Hero[]>(this.heroesUrl);
  }
/*
  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetch hero with id=${id}`);
    return this.http.get<Hero>(id);
  }
*/
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
