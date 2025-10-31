import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { markAsShown } from '../utils/markAsShown';

@Component({
  selector: 'app-aesthetics-component',
  templateUrl: './aesthetics-component.component.html',
  styleUrls: ['./aesthetics-component.component.scss']
})
export class AestheticsComponentComponent implements OnInit {

  constructor() { }

  @ViewChild('sectionContainer') componentDiv: ElementRef;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    markAsShown(this.componentDiv);
  }
  ngOnInit(): void {
  }

}
