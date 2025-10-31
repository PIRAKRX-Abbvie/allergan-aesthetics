import { Component, OnInit } from '@angular/core';
import { iconTypes } from '../../shared/icon/icon.constants';

@Component({
  selector: 'app-discover-component',
  templateUrl: './discover-component.component.html',
  styleUrls: ['./discover-component.component.scss']
})
export class DiscoverComponentComponent implements OnInit {

  nextSectionId = 'diversity';
  constructor() { }

  iconTypes = iconTypes

  ngOnInit(): void {
  }

}
