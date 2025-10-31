import { Component, OnInit } from '@angular/core';
import { buttonStyles } from 'src/app/shared/btn/btn.component';
import { iconTypes } from 'src/app/shared/icon/icon.constants';

@Component({
  selector: 'app-global-insights',
  templateUrl: './global-insights.component.html',
  styleUrls: ['./global-insights.component.scss']
})
export class GlobalInsightsComponent implements OnInit {
  buttonStyles = buttonStyles;
  iconTypes = iconTypes;

  constructor() { }

  ngOnInit(): void {
  }

}
