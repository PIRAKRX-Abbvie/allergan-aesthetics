import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-animate',
  templateUrl: './text-animate.component.html',
  styleUrls: ['./text-animate.component.scss']
})
export class TextAnimateComponent implements OnInit {
  
  @Input() text?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
