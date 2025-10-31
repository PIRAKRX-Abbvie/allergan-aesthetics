import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendsHeaderComponentComponent } from './trends-header-component/trends-header-component.component';
import { DiscoverComponentComponent } from './discover-component/discover-component.component';
import { SharedModule } from '../shared/shared.module';
import { TrendsIntroComponentComponent } from './trends-intro-component/trends-intro-component.component';
import { TrendsPageComponent } from './trends-page/trends-page.component';
import { DiversityComponentComponent } from './diversity-component/diversity-component.component';
import { TrendsPageFooterComponent } from './trends-page-footer/trends-page-footer.component';
import { SectionsComponentComponent } from './sections-component/sections-component.component';
import { ReferencesSectionComponent } from './references-section/references-section.component';
import { NewMasculineComponentComponent } from './new-masculine-component/new-masculine-component.component';
import { GenderInclusiveComponentComponent } from './gender-inclusive-component/gender-inclusive-component.component';
import { EphemeralExpressionComponentComponent } from './ephemeral-expression-component/ephemeral-expression-component.component';
import { ElevatedExperiencesComponentComponent } from './elevated-experiences-component/elevated-experiences-component.component';
import { NewBodyFrontiersComponentComponent } from './new-body-frontiers-component/new-body-frontiers-component.component';
import { AestheticsComponentComponent } from './aesthetics-component/aesthetics-component.component';
import { DigitalLensComponentComponent } from './digital-lens-component/digital-lens-component.component';
import { SectionContentComponent } from './shared/section-content/section-content.component';
import { BeautyMetaverseComponentComponent } from './beauty-metaverse-component/beauty-metaverse-component.component';
import { TheEndComponentComponent } from './the-end-component/the-end-component.component';
import { NavigateButtonComponent } from './shared/navigate-button/navigate-button.component';
import { TextAnimateComponent } from './shared/text-animate-component/text-animate.component';
@NgModule({
  declarations: [
    NavigateButtonComponent,
    TrendsPageComponent,
    TrendsHeaderComponentComponent,
    TrendsIntroComponentComponent,
    SectionsComponentComponent,
    DiscoverComponentComponent,
    DiversityComponentComponent,
    TrendsPageFooterComponent,
    ReferencesSectionComponent,
    NewMasculineComponentComponent,
    GenderInclusiveComponentComponent,
    EphemeralExpressionComponentComponent,
    ElevatedExperiencesComponentComponent, 
    NewBodyFrontiersComponentComponent,
    AestheticsComponentComponent,
    DigitalLensComponentComponent,
    BeautyMetaverseComponentComponent,
    TheEndComponentComponent,
    SectionContentComponent,
    TextAnimateComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TrendsPageFooterComponent,
    TrendsHeaderComponentComponent
  ]
})
export class TrendsModule { }
