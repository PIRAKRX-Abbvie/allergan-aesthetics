import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './services/analytics.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private analyticsService: AnalyticsService,
  ) {}

  ngOnInit() {
    this.analyticsService.init();
  }
}
