import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { SharedModule } from '../shared/shared.module';
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';
import { CareersSectionComponent } from './careers-section/careers-section.component';
import { ContactUsSectionComponent } from './contact-us-section/contact-us-section.component';
import { AboutUsSectionComponent } from './about-us-section/about-us-section.component';
import { CountrySelectorSectionComponent } from './country-selector-section/country-selector-section.component';
import { CountrySelectorComponent } from './country-selector/country-selector.component';
import { TrendsSectionComponent } from './trends-section/trends-section.component';


@NgModule({
  declarations: [
    CountrySelectorComponent,
    CountrySelectorSectionComponent,
    AboutUsSectionComponent,
    ContactUsSectionComponent,
    CareersSectionComponent,
    ContactUsFormComponent,
    HomepageComponent,
    TrendsSectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
