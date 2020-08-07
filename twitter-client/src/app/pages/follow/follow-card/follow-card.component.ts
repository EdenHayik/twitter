import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
@Component({
  selector: 'app-follow-card',
  templateUrl: './follow-card.component.html',
  styleUrls: ['./follow-card.component.sass']
})
export class FollowCardComponent implements OnInit {

  constructor(private userService: UserService) { }
  
  @Input() userInfo: any

  followFlag: Boolean
  selfFlag: Boolean
  followingLst: any
  
  //actionUser is the user we would like to follow/unfollow
  actionUserInfo: any
  ngOnInit(): void {
    this.actionUserInfo = JSON.parse(sessionStorage.getItem('registeredUser'))
    console.log(this.actionUserInfo)
    this.setFollowFlag();
  }

  setFollowFlag(){
    this.followFlag = this.actionUserInfo.followingArray.find(element => element === this.userInfo.user)
    console.log(this.userInfo.user + " follow flag is: " + this.followFlag)
    this.selfFlag = this.userInfo.user === this.actionUserInfo.user
  }
  
  getUserInfo(user){
    this.userService.getUserData(user).subscribe(
      data => {
        console.log("user is: " + user)
        console.log(data)
        sessionStorage.setItem('registeredUser', JSON.stringify(data[0]));
      },
      error => {
        console.log(error);
      }
    )
  }

  addFollow(){
    this.userService.followUser(this.actionUserInfo._id,this.userInfo.user).subscribe(
      data => {
        //update the session containing the user's data after the follow
        this.getUserInfo(this.actionUserInfo.user)
      },
      error => {
        console.log(error);
      }
    )
    //update the page after change
    this.ngOnInit()
  }

  removeFollow(){
    this.userService.unfollowUser(this.actionUserInfo._id,this.userInfo.user).subscribe(
      data => {
        //update the session containing the user's data after the unfollow
        this.getUserInfo(this.actionUserInfo.user)
      },
      error => {
        console.log(error);
      }
    )
    //update the page after change
    this.ngOnInit()
  }

}
