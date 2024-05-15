import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  RequiredValidator,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login-reactive',
  templateUrl: './login-reactive.component.html',
  styleUrl: './login-reactive.component.css',
})
export class LoginReactiveComponent {
  // email = new FormControl('', {
  //   validators: [
  //     Validators.required,
  //     Validators.maxLength(50),
  //     Validators.email,
  //   ],
  //   updateOn: 'blur',
  // });

  // password = new FormControl('', {
  //   validators: [
  //     Validators.required,
  //     Validators.minLength(4),
  //     Validators.pattern('[a-z]+'),
  //   ],
  // });

  // form = new FormGroup({
  //   email: this.email,
  //   password: this.password,
  // });

  form = this.fb.group({
    email: [
      '',
      [Validators.required, Validators.maxLength(50), Validators.email],
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('[a-z]+'),
      ],
    ],
  });

  constructor(private fb: FormBuilder) {}
}
