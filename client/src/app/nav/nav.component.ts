import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  constructor(public accountService: AccountService, public routerService: Router,
              private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  login ()
  {
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      this.routerService.navigateByUrl('/members');
    }, error => {
      console.log(error);
      this.toastrService.error(error.error);
    })
  }

  logout()
  {
    this.accountService.logout();
    this.routerService.navigateByUrl('/');
  }


}
