import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  allData: any;
  constructor(private ds: DashboardService) {}

  ngOnInit(): void {
    this.allData = this.ds.getDataFromTwitter();
  }
}
