import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
@Component({
  selector: 'app-follow-grid',
  templateUrl: './follow-grid.component.html',
  styleUrls: ['./follow-grid.component.sass']
})
export class FollowGridComponent implements OnInit {
 
  array: any[];
  colCount = 16;
  userInfos: any

  constructor(private userService: UserService) {
    this.array = new Array(this.colCount)
    this.array.find(element => element = sessionStorage.getItem('registeredUser'));
   }
  
  
  ngOnInit(): void {
    this.retriveAlllUsers();
  }

  retriveAlllUsers(){
    this.userService.getAllUsers().subscribe(
      data => {
        this.userInfos = data;
      },
      error => {
        console.log(error);
      });
  }

}
