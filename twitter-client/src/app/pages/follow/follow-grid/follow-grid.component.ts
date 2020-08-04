import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-follow-grid',
  templateUrl: './follow-grid.component.html',
  styleUrls: ['./follow-grid.component.sass']
})
export class FollowGridComponent implements OnInit {
 
  array: any[];
  colCount = 16;
  constructor() {
    this.array = new Array(this.colCount)
   }
  
  
  ngOnInit(): void {
  
  }

}
