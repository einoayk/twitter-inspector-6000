import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent {
  username: string;
  selectedUsername: string;

  onClick() {
    this.selectedUsername = this.username;
  }
}
