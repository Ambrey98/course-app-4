import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/auth/services/auth.service';
import { requestLogin } from 'src/app/auth/store/auth.actions';
import { AuthStateFacade } from 'src/app/auth/store/auth.facade';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email : '',
    password : ''
  };
  

  constructor(private authService: AuthService, private store: Store, private authStateFacade: AuthStateFacade) {}

  ngOnInit(): void {
  }

  onSubmit(myForm: NgForm) {
    /*
    this.user.email = myForm.value.email;
    this.user.password = myForm.value.password;
    this.authService.login({email: this.user.email, password: this.user.password});
    this.authService.isAuthorized$.subscribe(result => {
      if (result) {
        console.log('Successfully logged in');
      }
    })
    */
   
    const payLoad = {
      email: myForm.value.email,
      password: myForm.value.password
    }
    this.authStateFacade.login(payLoad);
    
  }

}
