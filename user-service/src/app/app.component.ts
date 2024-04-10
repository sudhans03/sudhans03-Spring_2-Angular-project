import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from './User.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user-module';
constructor(private UserService:  UserService){
  this.getUserDetails();
}

  register(registerForm: NgForm){
    this.UserService.registerUser(registerForm.value).subscribe(
      (resp: any)=>{
        console.log(resp);
        registerForm.reset();
        this.getUserDetails();

      },(err: any)=>{
        console.log(err);
      }
    );
  }

  getUserDetails(){
    this.UserService.getUsers().subscribe(
      (resp: any)=>{
        console.log(resp);
        this.userDetails=resp;
      }, (err: any)=>{
        console.log(err);
      }
    );
  }

  userDetails= null as any;

  deleteUser(user: any){
    this.UserService.deleteUser(user.uid).subscribe(
      (resp: any)=>{
        console.log(resp);
        this.getUserDetails();
      },(err: any)=>{
        console.log(err);
      }
    );
  }
 
  userToUpdate={
    U_id: "",
    U_name: "",
    U_address: "",
    U_Contact:"",
    U_Email:"",
    U_password: ""
  };

  edit(user: any){
    this.userToUpdate=user;
  }
  updateUser(){
    this.UserService.updateUser(this.userToUpdate).subscribe(
      (resp: any)=>{
        console.log(resp);
      },(err: any)=>{
        console.log(err);
      }
    );
  }
  
}
