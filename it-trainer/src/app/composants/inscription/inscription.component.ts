import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  form: FormGroup|any;


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
nom:'',
email:'',
motDePasse:'',
      
    })
  }

  submit(): void {
    this.http.post('http://localhost:4200/api/inscription', this.form.getRawValue(),
    {withCredentials:true})
      .subscribe(() => this.router.navigate(['/login']));
  }
  // password(formGroup: FormGroup) {
  //   const { value: password } = formGroup.get('password');
  //   const { value: confirmPassword } = formGroup.get('confirmpassword');
  //   return password === confirmPassword ? null : { passwordNotMatch: true };
  // }
}


