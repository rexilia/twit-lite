import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios';
import cheerio from 'cheerio';
@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  header = new HttpHeaders({
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept',
  });
  constructor(private http: HttpClient) {}
  // app.use(function(req, res, next) {
  //   res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //   next();
  // });

  getDataFromTwitter() {
    return this.http.get('https://twitter.com/sapphirab7', {
      headers: this.header,
    });
  }
}
