import { HttpClient } from '@angular/common/http';
import { isNgTemplate, ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/users';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DatingApp';
  users : any;

  constructor( private accountService: AccountService){}

  ngOnInit() {
    this.setCurentUser();
  }

  setCurentUser()
  {
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }

}
