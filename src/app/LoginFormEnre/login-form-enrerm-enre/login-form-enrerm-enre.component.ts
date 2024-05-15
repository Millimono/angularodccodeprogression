import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form-enrerm-enre',
  templateUrl: './login-form-enrerm-enre.component.html',
  styleUrl: './login-form-enrerm-enre.component.css',
})
export class LoginFormEnrermEnreComponent {
  val = {
    email: 'millimono64.sm@gmail.com',
    password: 12345,
  };

  Clicksurloginformbtn(loginform: NgForm) {
    console.log(loginform.value, loginform.valid);
  }

  Loginclick(loginform: NgForm, submit: any) {
    console.log(loginform.value, loginform.valid, submit);
    console.log('val :', this.val);
  }

  onEmailChange(newValue: string) {
    console.log('Nouvelle valeur:', newValue);
  }
}
