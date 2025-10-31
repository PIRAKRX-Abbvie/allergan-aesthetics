import { Component, Input, OnInit } from '@angular/core';
import { iconTypes } from '../icon/icon.constants';

@Component({
  selector: 'app-page-up-button',
  templateUrl: './page-up-button.component.html',
  styleUrls: ['./page-up-button.component.scss']
})
export class PageUpButtonComponent implements OnInit {

  @Input() sectionId:string;
  @Input() direction:string;
  
  iconTypes = iconTypes;
  constructor() { }

  ngOnInit(): void {
  }

}
