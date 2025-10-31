import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { markAsShown } from '../utils/markAsShown';

@Component({
  selector: 'app-ephemeral-expression-component',
  templateUrl: './ephemeral-expression-component.component.html',
  styleUrls: ['./ephemeral-expression-component.component.scss']
})
export class EphemeralExpressionComponentComponent implements OnInit {

  constructor() { }
  @ViewChild('sectionContainer') componentDiv: ElementRef;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    markAsShown(this.componentDiv);
  }

  ngOnInit(): void {
  }

}
