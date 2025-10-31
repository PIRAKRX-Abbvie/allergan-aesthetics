import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconComponent } from './icon/icon.component';
import { BtnComponent } from './btn/btn.component';
import { AccordionComponent } from './accordion/accordion.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DropdownComponent } from './dropdown/dropdown.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecaptchaModule } from 'ng-recaptcha';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AccordionComponent,
    BtnComponent,
    IconComponent,
    DropdownComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule, 
    NgbModule,
    RecaptchaModule
  ],

  exports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule,
    RecaptchaModule,
    AccordionComponent,
    BtnComponent,
    IconComponent,
    DropdownComponent,
    FooterComponent
  ],
})
export class SharedModule {}
