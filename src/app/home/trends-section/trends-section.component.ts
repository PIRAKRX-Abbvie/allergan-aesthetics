import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics.service';
import { buttonStyles } from 'src/app/shared/btn/btn.component';
import { ConfigService } from 'src/app/shared/config/config.service';
import { iconTypes } from 'src/app/shared/icon/icon.constants';

@Component({
  selector: 'app-trends-section',
  templateUrl: './trends-section.component.html',
  styleUrls: ['./trends-section.component.scss']
})
export class TrendsSectionComponent implements OnInit {
  buttonStyles = buttonStyles;
  iconTypes = iconTypes;

  maxWidth = 500;
  trendsUrl: string;

  constructor(private configService: ConfigService, private analyticsService: AnalyticsService) {
    this.trendsUrl = '/global-insights';
  }

  ngOnInit(): void { }

}
