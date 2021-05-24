import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-clinc',
  templateUrl: './clinc.component.html',
  styleUrls: ['./clinc.component.scss']
})
export class ClincComponent implements OnInit {

  clinics;
  errorMsg;
  constructor(private _login : LoginService) { }

  ngOnInit(): void {
    this._login.getClinc()
      .subscribe(data => {this.clinics =  data.data, console.log(data.data)},
                  error => this.errorMsg = error);
  }
  
  

}
