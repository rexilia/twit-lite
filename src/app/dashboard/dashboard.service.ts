import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as cheerio from 'cheerio';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    }),
  };
  constructor(private http: HttpClient) {}

  async getUserTweets() {
    return this.http.get('https://fast-waters-17490.herokuapp.com/results');
  }
}
