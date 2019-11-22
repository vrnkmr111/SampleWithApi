import { Component, OnInit } from '@angular/core';
import {UserInfo} from '../user-info';
import {UserServceService} from '../user-servce.service'
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modelpopup',
  templateUrl: './modelpopup.component.html',
  styleUrls: ['./modelpopup.component.css']
})
export class ModelpopupComponent implements OnInit {
  userDetails: Array<UserInfo>;
  constructor(private userService: UserServceService, private router: Router) { 

  }

  ngOnInit() {
    this.getUserDetails();
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
      result => {
        console.log(result);
      }, error => console.log('There was an error: ', error));
      this.router.navigateByUrl['http://localhost:4200/modalpopup'];
    }
}
