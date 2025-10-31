import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { iconTypes } from '../../shared/icon/icon.constants';
import { markAsShown } from '../utils/markAsShown';
@Component({
  selector: 'app-new-masculine-component',
  templateUrl: './new-masculine-component.component.html',
  styleUrls: ['./new-masculine-component.component.scss']
})
export class NewMasculineComponentComponent implements OnInit {

  @ViewChild('sectionContainer') componentDiv: ElementRef;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    markAsShown(this.componentDiv);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
