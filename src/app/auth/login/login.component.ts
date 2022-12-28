import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  imgCover = 'assets/img/social9.png'
  imgForm = 'assets/img/login.jpg'

  public loginForm !: FormGroup;
  constructor(
    private formBuilder : FormBuilder,
    private http : HttpClient,
    private router : Router
  ){}

  ngOnInit(){
    this.loginForm = this. formBuilder.group({
      email:[''],
      password:['']
    })
  }

  login(){
    this.http.get<any>("http://localhost:3000/users").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });

      if(user){
        alert("Login Success");
        this.loginForm.reset();
        this.router.navigate(['home']);
      }else{
        alert("User Not Found");
      }
    },err=>{
      alert("Something went wrong!!")
    })
  }


}
