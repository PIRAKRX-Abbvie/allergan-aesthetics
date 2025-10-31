import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics.service';
import { buttonStyles } from 'src/app/shared/btn/btn.component';
import { iconTypes } from 'src/app/shared/icon/icon.constants';


interface SelectItem {
  label: string;
  value: string;
}

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.scss']
})
export class CountrySelectorComponent implements OnInit {
  buttonStyles = buttonStyles;

  countryItems: SelectItem[];

  selectedCountry: SelectItem | null = null;

  isCollapsed = true;
  iconType = iconTypes.caretDown;

  constructor(private http: HttpClient, private analyticsService: AnalyticsService){}

  ngOnInit() {
    this.http.get<SelectItem[]>('./assets/countries/countries.json')
      .subscribe(async (res) => {
        this.countryItems = res;
      });
  }

  trackByFn(index: number, country: SelectItem) {
    return country.label;
  }

  selectCountry(country: SelectItem | null) {
    this.selectedCountry = country;
  }

  goToCountrySite() {
    if (this.selectedCountry) {
      this.analyticsService.pushEvent('siteSelect', {value: this.selectedCountry.label});
      window.location.href = this.selectedCountry.value;
    }
  }
}
