import { Component, Input, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { iconTypes } from '../icon/icon.constants';
import { kebabCase } from 'lodash';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  animations: [
    trigger('smoothCollapse', [
      state(
        'hidden',
        style({
          height: '0',
          overflow: 'hidden',
          opacity: '0',
          visibility: 'hidden'
        })
      ),
      state(
        'visible',
        style({
          overflow: 'hidden'
        })
      ),
      transition('visible<=>hidden', animate('250ms'))
    ])
  ]
})
export class AccordionComponent implements OnInit  {
  iconTypes = iconTypes;
  
  @Input() title: string = '';
  @Input() maxWidth: number | null = null;
  @Input() rightAligned: boolean = false;

  isOpen = false;
  labelId: string;

  constructor() {}

  ngOnInit(): void {
    this.labelId = `${kebabCase(this.title)}-title`;
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
  }

  open(): void {
    this.isOpen = true;
  }

  close(): void {
    this.isOpen = false;
  }
}
