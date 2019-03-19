import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Twitter } from '../../types';

import { TweetService } from '../../services/tweet.service'

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnChanges {
  @Input() searchTerm: string;
  @Input() tweetCount: number;
  @Input() resultType: string;

  twitter: Twitter;  
  error: any;
    
  constructor(private tweetSercive: TweetService) { }
    
  ngOnChanges (changes: SimpleChanges) { 
    this.getTwitter(this.searchTerm, this.resultType);
  }  

  private getTwitter(searchTerm: string, resultType: string): void {    
    this.tweetSercive.getTweets(searchTerm, resultType)
      .subscribe(twitter => this.twitter = twitter,
        error => this.error = error);       
  } 
}