import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AnalyticsService } from 'src/app/services/analytics.service';
import { RecaptchaService } from 'src/app/services/recaptcha.service';
import { ApiService } from 'src/app/shared/api/api.service';
import { buttonStyles } from 'src/app/shared/btn/btn.component';
import { ConfigService } from 'src/app/shared/config/config.service';
import { apiRoutes } from 'src/app/shared/constants/route.constants';
import { SelectItem } from 'src/app/shared/dropdown/dropdown.component';
import { iconTypes } from 'src/app/shared/icon/icon.constants';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss']
})
export class ContactUsFormComponent implements OnInit {
  buttonStyles = buttonStyles;
  iconTypes = iconTypes;

  @Output() onSubmitted = new EventEmitter<Boolean>();

  usProductRelatedMedicalInquiryValue = 'IR-Medcom@Allergan.com';

  recipientOptions: SelectItem[];

  aestheticProductOptions: SelectItem[] = [
    { value: 'BOTOX® Cosmetic (onabotulinumtoxinA)', label: 'BOTOX® Cosmetic (onabotulinumtoxinA)' },
    { value: 'COOLSCULPTING®', label: 'COOLSCULPTING®' },
    { value: 'CoolTone®', label: 'CoolTone®' },
    { value: 'CUI™ Brand Saline-Filled Tissue Expanders', label: 'CUI™ Brand Saline-Filled Tissue Expanders' },
    { value: 'JUVÉDERM® Ultra', label: 'JUVÉDERM® Ultra' },
    { value: 'JUVÉDERM® Ultra Plus', label: 'JUVÉDERM® Ultra Plus' },
    { value: 'JUVÉDERM® Ultra Plus XC', label: 'JUVÉDERM® Ultra Plus XC' },
    { value: 'JUVÉDERM® Ultra XC', label: 'JUVÉDERM® Ultra XC' },
    { value: 'JUVÉDERM® VOLBELLA™ XC', label: 'JUVÉDERM® VOLBELLA™ XC' },
    { value: 'JUVÉDERM® VOLLURE™ XC', label: 'JUVÉDERM® VOLLURE™ XC' },
    { value: 'JUVÉDERM® VOLUMA™ XC', label: 'JUVÉDERM® VOLUMA™ XC' },
    { value: 'KELLER FUNNEL® 2', label: 'KELLER FUNNEL® 2' },
    { value: 'KYBELLA® (deoxycholic acid) injection10mg/mL', label: 'KYBELLA® (deoxycholic acid) injection10mg/mL' },
    { value: 'LATISSE® (bimatoprost ophthalmic solution) 0.03%', label: 'LATISSE® (bimatoprost ophthalmic solution) 0.03%' },
    { value: 'NATRELLE® 133 Tissue Expanders', label: 'NATRELLE® 133 Tissue Expanders' },
    { value: 'NATRELLE® and NATRELLE INSPIRA® Silicone-Filled Breast Implants', label: 'NATRELLE® and NATRELLE INSPIRA® Silicone-Filled Breast Implants' },
    { value: 'NATRELLE® Saline-Filled Breast Implant Sizer', label: 'NATRELLE® Saline-Filled Breast Implant Sizer' },
    { value: 'NATRELLE® Silicone-Filled Breast Implant Sizer', label: 'NATRELLE® Silicone-Filled Breast Implant Sizer' },
    { value: 'REVOLVE™ SYSTEM', label: 'REVOLVE™ SYSTEM' },
    { value: 'SkinMedica®', label: 'SkinMedica®' },
  ];

  regenerativeProductOptions: SelectItem[] = [
    { value: 'AlloDerm™ SELECT Regenerative Tissue Matrix', label: 'AlloDerm™ SELECT Regenerative Tissue Matrix' },
    { value: 'STRATTICE™ Reconstructive Tissue Matrix', label: 'STRATTICE™ Reconstructive Tissue Matrix' },
    { value: 'STRATTICE™ Reconstructive Tissue Matrix Extra Thick', label: 'STRATTICE™ Reconstructive Tissue Matrix Extra Thick' },
    { value: 'STRATTICE™ Reconstructive Tissue Matrix Laparoscopic', label: 'STRATTICE™ Reconstructive Tissue Matrix Laparoscopic' },
    { value: 'STRATTICE™ Reconstructive Tissue Matrix Perforated', label: 'STRATTICE™ Reconstructive Tissue Matrix Perforated' },
  ];

  preferredCallTimeOptions: SelectItem[] =  [
    { value: '9am to 11am ET', label: '9am to 11am ET' },
    { value: '11am to 1pm ET', label: '11am to 1pm ET' },
    { value: '1pm to 3pm ET', label: '1pm to 3pm ET' },
    { value: '3pm to 5pm ET', label: '3pm to 5pm ET' }
  ];

  aestheticProductValue = 'aestheticProduct';
  regenerativeProductValue = 'regenerativeProduct';

  contactUsForm: FormGroup;

  recaptchaSiteKey: string;
  submitting = false;
  submitted = false;
  errored = false;

  constructor(
    private fb: FormBuilder,
    private recaptchaService: RecaptchaService,
    private apiService: ApiService,
    private configService: ConfigService,
    private http: HttpClient,
    private analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
    this.http.get<SelectItem[]>('./assets/recipients/recipients.json')
      .subscribe(async (res) => {
        this.recipientOptions = res;
        this.buildForm();
      });
    
    this.recaptchaService.getRecaptchaSiteKey()
      .pipe(first())
      .subscribe((resp) => {
        this.recaptchaSiteKey = resp['site-key'];
      });
  }

  buildForm():void {
    this.contactUsForm = this.fb.group({
      recipient: [this.recipientOptions[0].value, Validators.required],
      category: [''],
      aestheticProduct: [''],
      regenerativeProduct: [''],
      message: ['', Validators.required],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      preferredCallTime: [this.preferredCallTimeOptions[0].value, Validators.required],
    });

    const category = this.contactUsForm.get('category');
    const aestheticProduct = this.contactUsForm.get('aestheticProduct');
    const regenerativeProduct = this.contactUsForm.get('regenerativeProduct');

    category?.valueChanges
      .subscribe(value => {
        aestheticProduct?.setValidators(null);
        regenerativeProduct?.setValidators(null);

        if (value === this.aestheticProductValue) {
          aestheticProduct?.setValidators([Validators.required]);

        } else  if (value === this.regenerativeProductValue) {
          regenerativeProduct?.setValidators([Validators.required]);
        }

        aestheticProduct?.reset();
        regenerativeProduct?.reset();
      });
  }

  onSubmit(recaptchaResponse: string): void {
    this.submitted = true;

    let formData = {
      ...this.contactUsForm.value,
      recaptchaResponse,
      siteOrigin: this.configService.config.siteOrigin,
      siteLanguage: this.configService.config.siteLanguage,
      recaptchaAccount: this.configService.config.recaptchaKey,
    }

    if (formData.recipient !== this.usProductRelatedMedicalInquiryValue) {
      formData.category = null;
      formData.aestheticProduct = null;
      formData.regenerativeProduct = null;

    } else if (formData.category === null) {
      formData.aestheticProduct = null;
      formData.regenerativeProduct = null;

    } else if (formData.category === this.aestheticProductValue) {
      formData.regenerativeProduct = null;
      
    } else if (formData.category === this.regenerativeProductValue) {
      formData.aestheticProduct = null;
    
    }

    this.apiService.post(apiRoutes.contact.formPost(), formData)
      .subscribe(
        () => {
          this.analyticsService.pushEvent('formSubmit');

          this.onSubmitted.emit(formData);
        },
        () => {
          this.errored = true;
        }
      );
  }

  trackByFn(index: number, item: SelectItem) {
    return item.value;
  }

  showCategory(): boolean {
    return this.contactUsForm.controls.recipient.value === this.usProductRelatedMedicalInquiryValue;
  }

  showCategoryDropdown(categoryValue: string): boolean {
    if (!this.showCategory()) {
      return false;
    }

    const category = this.contactUsForm.controls.category.value;
    return category === categoryValue;
  }

  hasErrors(control: AbstractControl): boolean {
    return control.invalid && (control.dirty || control.touched);
  }

  isError(control: AbstractControl, error: string): boolean {
    if (!this.hasErrors(control)){
      return false;
    }

    if (!control.errors) {
      return false;
    }

    return control.errors[error] === true;
  }
}
