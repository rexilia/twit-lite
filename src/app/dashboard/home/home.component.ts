import { Component, HostListener, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  allData: any;
  constructor(private ds: DashboardService) {}
  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      // Load Your Data Here
    }
  }
  ngOnInit(): void {
    this.getData();
  }
  async getData() {
    // if (localStorage.getItem('data'))
    //   this.allData = JSON.parse(localStorage.getItem('data'));
    (await this.ds.getUserTweets()).subscribe((v) => {
      this.allData = v;
      localStorage.setItem('data', JSON.stringify(v).slice(0, 100));
    });
  }
  fileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    let decimals = 2;
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
}
