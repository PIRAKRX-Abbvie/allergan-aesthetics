import { Component, Input, OnInit } from '@angular/core';
import { iconTypes } from '../../../shared/icon/icon.constants';
import { scrollTo } from '../../utils/scrollTo';
@Component({
  selector: 'app-navigate-button',
  templateUrl: './navigate-button.component.html',
  styleUrls: ['./navigate-button.component.scss']
})
export class NavigateButtonComponent implements OnInit {
  
  @Input() sectionId?: string;
  @Input() direction:string;
  iconTypes = iconTypes;
  constructor() { }

  handleClick () { 
    if (this.sectionId) { 
      scrollTo(this.sectionId);
    }
  }

  ngOnInit(): void {
  }

}
