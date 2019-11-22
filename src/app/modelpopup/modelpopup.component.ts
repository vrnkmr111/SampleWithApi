import { Component, OnInit } from '@angular/core';
import {UserInfo} from '../user-info';
import {UserServceService} from '../user-servce.service'

@Component({
  selector: 'app-modelpopup',
  templateUrl: './modelpopup.component.html',
  styleUrls: ['./modelpopup.component.css']
})
export class ModelpopupComponent implements OnInit {
  userDetails: Array<UserInfo>;
  constructor(private userService: UserServceService) { 

  }

  ngOnInit() {
  }
  getUserDetails()
  {
    this.userService.GetUserDetails().subscribe(
      data => {
        this.userDetails = data
      }
    );
    
  }
  deleteUser(uID: number)
  {
    this.userService.DeleteUserId(uID).subscribe(
      data => {
        
      }
    );
  }
  
}
