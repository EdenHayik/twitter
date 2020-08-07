import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const serverBaseUrl = 'http://localhost:8080/api/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(serverBaseUrl);
  }

  getUserData(user) {
    return this.http.get(`${serverBaseUrl}/${user}`);
  }

  //user id is my user. the name of the user to follow is in the request's body.
  followUser(userId, userToFollow){
    return this.http.put(`${serverBaseUrl}/add/${userId}`,{user: userToFollow});
  }

  unfollowUser(userId, userToUnfollow){
    return this.http.put(`${serverBaseUrl}/remove/${userId}`,{user: userToUnfollow});
  }

  createUser(bodyData){
    return this.http.post(`${serverBaseUrl}`,bodyData);
  }

}
