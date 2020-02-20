import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public accounts = [];
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getAccounts(localStorage.getItem('userID')).subscribe(
      success => {
        this.accounts = Object.keys(success.accounts).map(account => {
          return {
            name: account,
            products: success.accounts[account]
          }
        });
      },
      error => {
        this.accounts = []
        console.error('Error');
      }
    );
  }

}
