import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output
} from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit, OnChanges {
  @Input() type: IconDefinition | null;
  @Input() spin = false;
  @Input() hasBadge = false;
  @Input() size: SizeProp | undefined;
  @Output() click = new EventEmitter();

  views = {
    default: 'default',
    clickable: 'clickable'
  };
  view: string;

  ngOnInit() {
    this.setView();
  }

  ngOnChanges() {
    this.setView();
  }

  setView() {
    if (this.click.observers.length > 0) {
      this.view = this.views.clickable;
      return;
    }

    this.view = this.views.default;
  }

  onEnter() {
    this.click.emit();
  }
}
