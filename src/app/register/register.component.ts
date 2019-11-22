import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'; 
import {UserInfo} from '../user-info';
import {UserServceService} from '../user-servce.service'
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  data = false;    
  registrationForm: any;    
  message:string; 
  constructor(private userService: UserServceService, private formBuilder: FormBuilder, private toastr : ToastrService) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      EmailId: ['', Validators.required],
      Password: ['', Validators.required, Validators.maxLength(10)],
      UserFullName: [],
      UserAddress: this.formBuilder.group(
        {
          Addess1: [],
          Address2: [],
          City: [],
          State: [],
          Country: []
        }
      )
    });    
  }
  reset()
  {
    this.registrationForm.reset();
  }
  get f() { return this.registrationForm.controls; }
    onFormSubmit()
    {
      const user = this.registrationForm.value;    
      this.Createemployee(user);    
    }
    Createemployee(userInfo:UserInfo)
    {
      this.userService.CreateUser(userInfo).subscribe(
        () =>
        {
          this.data =true;
          if(this.registrationForm.invalid)
          {
            this.toastr.error("some thing went wrong!!!", "failed");
            return;
          }
          this.message = "User added sucessfully";
          this.registrationForm.reset();
          this.toastr.success(this.message,"Sucess");
          console.log(this.message);
        }
      );
    }

}
