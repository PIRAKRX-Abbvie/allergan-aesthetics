import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { markAsShown } from '../utils/markAsShown';

@Component({
  selector: 'app-diversity-component',
  templateUrl: './diversity-component.component.html',
  styleUrls: ['./diversity-component.component.scss']
})
export class DiversityComponentComponent implements OnInit {

  @ViewChild('sectionContainer') componentDiv: ElementRef;
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    markAsShown(this.componentDiv);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
