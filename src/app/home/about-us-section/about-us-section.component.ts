import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us-section',
  templateUrl: './about-us-section.component.html',
  styleUrls: ['./about-us-section.component.scss'],
  animations: [
    trigger('smoothCollapse', [
      state('visible', style({
        height: '0',
        overflow: 'hidden',
        opacity: '0',
        visibility: 'hidden',
      })),
      state('hidden', style({
        overflow: 'hidden'
      })),
      transition('visible<=>hidden', animate('250ms')),
    ])
  ]
})
export class AboutUsSectionComponent implements OnInit {
  maxWidth = 923;

  constructor() { }

  ngOnInit(): void {
  }
}
