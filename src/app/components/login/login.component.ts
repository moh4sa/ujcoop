import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  constructor(private _login : LoginService, private router: Router) { }
  showError: boolean =  false;
  ngOnInit(): void {

  }

  login = new FormGroup({
    id: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    console.log(this.login.value);
    this._login.loginService(this.login.value)
      .subscribe(
        Response => {
          if (Response.status === "success") this.router.navigate(['clinc']);  
      },
      error => { if (error.statusText === "Unauthorized") console.log(error) , this.showError= true }
    );

  }

}
