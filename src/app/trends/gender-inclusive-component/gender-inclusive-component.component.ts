import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { markAsShown } from '../utils/markAsShown';

@Component({
  selector: 'app-gender-inclusive-component',
  templateUrl: './gender-inclusive-component.component.html',
  styleUrls: ['./gender-inclusive-component.component.scss']
})
export class GenderInclusiveComponentComponent implements OnInit {

  constructor() { }
  @ViewChild('sectionContainer') componentDiv: ElementRef;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    markAsShown(this.componentDiv);
  }

  ngOnInit(): void {
  }

}
