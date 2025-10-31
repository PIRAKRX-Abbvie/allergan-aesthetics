import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { markAsShown } from '../utils/markAsShown';

@Component({
  selector: 'app-new-body-frontiers-component',
  templateUrl: './new-body-frontiers-component.component.html',
  styleUrls: ['./new-body-frontiers-component.component.scss']
})
export class NewBodyFrontiersComponentComponent implements OnInit {

  constructor() { }
  
  @ViewChild('sectionContainer') componentDiv: ElementRef;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    markAsShown(this.componentDiv);
  }
  ngOnInit(): void {
  }

}
