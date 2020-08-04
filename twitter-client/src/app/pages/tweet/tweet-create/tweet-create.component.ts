import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet-create',
  templateUrl: './tweet-create.component.html',
  styleUrls: ['./tweet-create.component.sass']
})
export class TweetCreateComponent implements OnInit {

  inputValue: String;
  constructor() { }

  ngOnInit(): void {
  }

  sendTweet(): void {
    console.log("send tweet");
  }

}
