import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { markAsShown } from '../utils/markAsShown';

@Component({
  selector: 'app-elevated-experiences-component',
  templateUrl: './elevated-experiences-component.component.html',
  styleUrls: ['./elevated-experiences-component.component.scss']
})
export class ElevatedExperiencesComponentComponent implements OnInit {

  constructor() { }

  @ViewChild('sectionContainer') componentDiv: ElementRef;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    markAsShown(this.componentDiv);
  }
  
  ngOnInit(): void {
  }

}
