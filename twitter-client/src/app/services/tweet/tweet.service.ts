import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const serverBaseUrl = 'http://localhost:8080/api/tweet';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  
  constructor(private http: HttpClient) { }

  getAllTweets(userId){
    return this.http.get(`${serverBaseUrl}/${userId}`);
  }

  createNewTweet(bodyData){
    return this.http.post(serverBaseUrl, bodyData);
  }

  deleteTweet(tweetId, bodyData){
    return this.http.put(`${serverBaseUrl}/${tweetId}`,bodyData);
  }

  



}
