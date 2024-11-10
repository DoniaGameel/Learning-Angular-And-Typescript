import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // pass data from parent to child
  @Input() item = 0;

  // padd data from child to parent
  @Output() updateDataEvent = new EventEmitter<string>();
}
