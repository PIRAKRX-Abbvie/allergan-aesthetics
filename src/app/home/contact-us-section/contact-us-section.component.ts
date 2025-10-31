import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import * as focusTrap from 'focus-trap';
import { buttonStyles } from 'src/app/shared/btn/btn.component';
import { iconTypes } from 'src/app/shared/icon/icon.constants';
@Component({
  selector: 'app-contact-us-section',
  templateUrl: './contact-us-section.component.html',
  styleUrls: ['./contact-us-section.component.scss']
})
export class ContactUsSectionComponent {
  buttonStyles = buttonStyles;
  iconTypes = iconTypes;

  maxWidth = 977;

  
  constructor() {}
}
