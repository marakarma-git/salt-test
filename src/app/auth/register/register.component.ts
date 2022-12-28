import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  imgCover = 'assets/img/social9.png'
  imgForm = 'assets/img/login.jpg'

  public registrationForm !: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ){}

  ngOnInit():void{
    this.registrationForm = this.formBuilder.group({
      fullname: [''],
      phone: [''],
      email: [''],
      password: [''],
    })
  }

  register(){
    this.http.post<any>(" http://localhost:3000/users", this.registrationForm.value).subscribe(res=>{
      alert("Registration Successfull!!");
      this.registrationForm.reset;
      this.router.navigate(['/login']);
    },err=>{
      alert("Something went wrong!!")
    })
  }
}
