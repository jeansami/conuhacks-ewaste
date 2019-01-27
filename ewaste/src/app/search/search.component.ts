import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {post} from 'selenium-webdriver/http';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

//@Injectable()
//  export class SearchComponent {
//  constructor(private http: HttpClient) { }
//}




///** POST: search the database for a value */
//searchRecord (record: Record): Observable<record> {

//}


/** POST: add a new hero to the database */
//addHero (hero: Hero): Observable<Hero> {
//  return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
//    .pipe(
//      catchError(this.handleError('addHero', hero))
//    );
//}


