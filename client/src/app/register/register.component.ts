import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any={};

  constructor(private acountService: AccountService) { }

  ngOnInit(): void {
  }

  register(){
    this.acountService.register(this.model).subscribe(respone=>{
      this.cancel();
    })
  }

  cancel(){
    this.cancelRegister.emit(false);
  }
}
