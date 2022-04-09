import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //import users from parentcomponent (Home Component)
  @Input() usersFromHomeComponent: any ;
  //send data to parent(Home component) from child
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor(private accountService: AccountService, private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

    register() {
      this.accountService.register(this.model).subscribe(response => {
        console.log(response);
        this.cancel();
      }, error => {
        console.log(error);
        this.toastrService.error(error.error);
      })
      console.log(this.model);
    }

    cancel() {
      console.log('cancelled');
      this.cancelRegister.emit(false); //it emits the data false to the cancel register methof
    }
}
