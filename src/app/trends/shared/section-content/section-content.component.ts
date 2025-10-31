import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'section-content',
  templateUrl: './section-content.component.html',
  styleUrls: ['./section-content.component.scss']
})
export class SectionContentComponent implements OnInit {

  @Input() pageNum: string;
  @Input() prevSectionId?: string;
  @Input() nextSectionId?: string;

  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
