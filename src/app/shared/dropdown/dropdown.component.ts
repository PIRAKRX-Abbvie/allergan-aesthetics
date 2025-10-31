import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { isThrowStatement } from 'typescript';
import { iconTypes } from '../icon/icon.constants';

export interface SelectItem {
  label: string;
  value: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() items: SelectItem[];
  @Input() placeholder: string = '';
  @Output() onChange = new EventEmitter<SelectItem | null>();

  selectedItem: SelectItem | null = null;
  isCollapsed = true;
  iconType = iconTypes.caretDown;
  animating = false;

  constructor() { }

  ngOnInit(): void {
  }

  
  trackByFn(index: number, item: SelectItem) {
    return item.label;
  }

  updateIcon() {
    this.iconType = this.isCollapsed ? iconTypes.caretDown : iconTypes.caretUp;
  }

  selectItem(item: SelectItem) {
    this.selectedItem = item;
    this.onChange.emit(item);
    this.updateIcon();
  }

}
