import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Twitter } from '../../types';

import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnChanges {
  @Input() username: string;
  
  twitter: Twitter; 
  error: any;    

  constructor(private userSercive: UserService) { }
    
  ngOnChanges (changes: SimpleChanges) {
    this.twitter = undefined; 
    this.getAccount(this.username);
  }  

  private getAccount(username: string): void {
    this.userSercive.getAccount(username)
      .subscribe(twitter => this.twitter = twitter,
        error => this.error = error);       
  }  
}
