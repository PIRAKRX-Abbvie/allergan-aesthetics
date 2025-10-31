import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { markAsShown } from '../utils/markAsShown';

@Component({
  selector: 'app-digital-lens-component',
  templateUrl: './digital-lens-component.component.html',
  styleUrls: ['./digital-lens-component.component.scss']
})
export class DigitalLensComponentComponent implements OnInit {

  constructor() { }
  @ViewChild('sectionContainer') componentDiv: ElementRef;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    markAsShown(this.componentDiv);
  }

  ngOnInit(): void {
  }

}
