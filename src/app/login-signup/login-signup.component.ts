import { Component,NgModule,OnInit,NgModuleDecorator } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Router,Route,RouterLink } from '@angular/router';
import { json } from 'stream/consumers';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Pipe } from '@angular/core';
import { Validator } from '@angular/forms';

@Component({
  selector: 'app-login-signup',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.css'
})
export class LoginSignupComponent {
// constructor(private router:Router){}

  //navigateToSecondPage() {
  //  this.router.navigate(['dashboard']);
  //}

  constructor(private router:Router){}

  signupUsers:any[]=[];
  signupObj:any={
    userName:'',
    password:'',
    email:''
   
  };
  loginObj:any={
    userName:'',
    password:''
  };


  ngOnInit() :void {
    const localData =localStorage.getItem('signupuser');
    if(localData!=null){
this.signupUsers=JSON.parse(localData);
    }

  }
  onsignup(){

    //validation

    if(this.signupObj.password.length<8){
      alert('Password must be at least 8 characters long.');
      return;
    }


   

    this.signupUsers.push(this.signupObj);
    console.log("data is gone in local stoarge");
    localStorage.setItem('signupuser',JSON.stringify(this.signupUsers));
    if(this.signupUsers){
      alert("successfull signup");
    }

    //i am using it again to resset the signup page again
    this.signupObj={
      userName: '',
      email: '',
      password: ''
    }
  }
  onlogin(){

    console.log('Login Attempt:', this.loginObj); 
    const isuserexit = this.signupUsers.find(m => m.userName === this.loginObj.userName && m.password === this.loginObj.password);
    console.log('User Found:', isuserexit);
    if (isuserexit) {
      alert('Login failed');
      
    } else {
      this.router.navigate(['dashboard']);
      alert('login successfully');
    }

}
}
