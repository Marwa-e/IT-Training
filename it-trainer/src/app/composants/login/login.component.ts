import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;


  constructor(
  private formBuilder: FormBuilder,
  private http: HttpClient,
  private router: Router,
  ) {
    
  }
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email:'',
      motDePasse:'',
  });
}
submit(): void {
  this.http.post('http://localhost:4200/api/inscription', this.form.getRawValue(),
  {withCredentials:true})
    .subscribe(() => this.router.navigate(['/']));
}
}
