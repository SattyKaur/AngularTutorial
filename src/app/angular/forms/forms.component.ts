import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from './custom.validators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  myName = 'Satty';

  newUserForm: any;

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, CustomValidators.emailDomain]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor(private router: Router, private fb: FormBuilder) {
    this.newUserForm = this.fb.group({
      name: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        postcode: ['', Validators.required]
      })
    });
  }

  ngOnInit() {

  }


  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  submit(f) {
    console.log(f);
  }

  login(value) {
    console.log(value);
  }

  get username() {return this.loginForm.get('username'); }
  get password() {return this.loginForm.get('password'); }

  next() {
    this.router.navigate(['angular/routing']);
    window.scrollTo(0, 0);
  }

  previous() {
    this.router.navigate(['angular/pipes']);
    window.scrollTo(0, 0);
  }

  top() {
    window.scrollTo(0, 0);
  }

}

