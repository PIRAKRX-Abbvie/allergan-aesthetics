import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { markAsShown } from '../utils/markAsShown';

@Component({
  selector: 'app-beauty-metaverse-component',
  templateUrl: './beauty-metaverse-component.component.html',
  styleUrls: ['./beauty-metaverse-component.component.scss']
})
export class BeautyMetaverseComponentComponent implements OnInit {

  constructor() { }
  @ViewChild('sectionContainer') componentDiv: ElementRef;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    markAsShown(this.componentDiv);
  }

  ngOnInit(): void {
  }

}
