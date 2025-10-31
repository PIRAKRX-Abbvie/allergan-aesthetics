import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';
import { TrendsPageComponent } from './trends/trends-page/trends-page.component';
import { GlobalInsightsComponent } from './insights/global-insights/global-insights.component';
import { AestheticIndividualityReportComponent } from './insights/aesthetic-individuality-report/aesthetic-individuality-report.component';
import { AestheticEthicsReportComponent } from './insights/aesthetic-ethics-report/aesthetic-ethics-report.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'global-trends-report',
    component: TrendsPageComponent
  },
  {
    path: 'global-insights',
    component: GlobalInsightsComponent
  },
  {
    path: 'aesthetic-individuality',
    component: AestheticIndividualityReportComponent
  },
  {
    path: 'aesthetic-ethics',
    component: AestheticEthicsReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
