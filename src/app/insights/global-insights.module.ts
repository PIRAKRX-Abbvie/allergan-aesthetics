import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalInsightsComponent } from './global-insights/global-insights.component';
import { SharedModule } from '../shared/shared.module';
import { TrendsModule } from '../trends/trends.module';
import { AestheticIndividualityReportComponent } from './aesthetic-individuality-report/aesthetic-individuality-report.component';
import { AestheticEthicsReportComponent } from './aesthetic-ethics-report/aesthetic-ethics-report.component';



@NgModule({
  declarations: [
    GlobalInsightsComponent,
    AestheticIndividualityReportComponent,
    AestheticEthicsReportComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TrendsModule
  ]
})
export class GlobalInsightsModule { }
