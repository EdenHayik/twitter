import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs'
import { Tweet } from '../../Interfaces/tweet.model';



@Injectable({
  providedIn: 'root'
})
export class TweetService {

  private _tweets: BehaviorSubject<Tweet[]> = new BehaviorSubject<Tweet[]>([]);
  private _serverBaseUrl: string = 'http://localhost:8080/api/tweet';
  constructor(private http: HttpClient) { }

  public get observableTodo$(){
    return this._tweets.asObservable();
  }

  getAllTweets(userId)
  {
    return this.http.get<Tweet[]>(`${this._serverBaseUrl}/${userId}`).subscribe(
      res => {
        this._tweets.next(res);
      }
    )
  }

  createNewTweet(bodyData){
    return this.http.post<Tweet>(this._serverBaseUrl,bodyData).subscribe(
      res => {
        this._tweets.next([res, ...this._tweets.value]);
      }
    )
  }

  deleteTweet(tweetId, bodyData){
    return this.http.put(`${this._serverBaseUrl}/${tweetId}`,bodyData).subscribe(
      res => {
        //this._tweets.next()
      }
    )
  }
  // getAllTweets(userId){
  //   return this.http.get(`${serverBaseUrl}/${userId}`);
  // }

  // createNewTweet(bodyData){
  //   return this.http.post(serverBaseUrl, bodyData);
  // }

  // deleteTweet(tweetId, bodyData){
  //   return this.http.put(`${serverBaseUrl}/${tweetId}`,bodyData);
  // }

  



}
