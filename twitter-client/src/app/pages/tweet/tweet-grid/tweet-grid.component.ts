import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet-grid',
  templateUrl: './tweet-grid.component.html',
  styleUrls: ['./tweet-grid.component.sass']
})
export class TweetGridComponent implements OnInit {

  array: any[];
  colCount = 16;
  constructor() {
    this.array = new Array(this.colCount)
   }
  
  ngOnInit(): void {
  }

}
