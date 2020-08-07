import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { UserService } from '../../services/user/user.service';
@Component({
  selector: 'app-change-user',
  templateUrl: './change-user.component.html',
  styleUrls: ['./change-user.component.sass']
})
export class ChangeUserComponent implements OnInit {

  constructor(private userService: UserService) { }
  
  registeredUser: string

  ngOnInit(): void {
    if (sessionStorage.getItem('registeredUser'))
      this.registeredUser = JSON.parse(sessionStorage.getItem('registeredUser')).user;
      console.log(this.registeredUser)
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

  registerNewUser(user){
    this.getUserInfo(user);
    this.registeredUser = user;
  }

}
