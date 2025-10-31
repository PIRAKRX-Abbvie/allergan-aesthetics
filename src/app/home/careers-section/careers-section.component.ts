import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics.service';
import { buttonStyles } from 'src/app/shared/btn/btn.component';
import { ConfigService } from 'src/app/shared/config/config.service';
import { iconTypes } from 'src/app/shared/icon/icon.constants';



@Component({
  selector: 'app-careers-section',
  templateUrl: './careers-section.component.html',
  styleUrls: ['./careers-section.component.scss']
})
export class CareersSectionComponent implements OnInit {
  buttonStyles = buttonStyles;
  iconTypes = iconTypes;

  maxWidth = 500;
  careersUrl: string;

  constructor(private configService: ConfigService, private analyticsService: AnalyticsService) {
    this.careersUrl = configService.config.careersUrl;
  }

  ngOnInit(): void {}

  trackEvent(e: any): void {
    this.analyticsService.pushEvent('btn', { 
      value: 'Open Roles'
    });
  }
}
