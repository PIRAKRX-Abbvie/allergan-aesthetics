import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { markAsShown } from '../utils/markAsShown';

@Component({
  selector: 'app-the-end-component',
  templateUrl: './the-end-component.component.html',
  styleUrls: ['./the-end-component.component.scss']
})
export class TheEndComponentComponent implements OnInit {

  @ViewChild('sectionContainer') componentDiv: ElementRef;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    markAsShown(this.componentDiv);
  }

  constructor() { }

  ngOnInit(): void {
  }
}
