import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLoadModule } from './shared/app-load/app-load.module';
import { TrendsModule } from './trends/trends.module';
import { HomeModule } from './home/home.module';
import { GlobalInsightsModule } from './insights/global-insights.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    AppLoadModule,
    HomeModule,
    TrendsModule,
    GlobalInsightsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
