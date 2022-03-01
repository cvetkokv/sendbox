import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../_models/users';
import { AccountService } from '../_services/account.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items:any;
  registerMode=false;
  title="Sendbox";
  constructor(private http:HttpClient,public accountService: AccountService, private titleService:Title) { 
    this.items=null;
  }

  ngOnInit(): void {
    this.getUserItems();
    this.titleService.setTitle("SendBox");
  }

  registerToggle(){
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event: boolean)
  {
    this.registerMode = event;
  }

  getUserItems(){
    var idd = JSON.parse(localStorage.getItem('user'));
    this.http.get("https://localhost:5001/api/Item/"+idd.id).subscribe(response=>{
      this.items=response;
    },error=>{
      console.log(error);
    });
  }
  
}
