import { Component } from '@angular/core';

@Component({
  selector: 'app-tweets-search',
  templateUrl: './tweets-search.component.html',
  styleUrls: ['./tweets-search.component.css']
})
export class TweetsSearchComponent {
  selectedSearchTerm: string;  
  searchTerm: string;

  tweetCount: string;
  selectedTweetCount: number;
  
  resultType: string;
  selectedResultType: string;

  onClick() {
    this.selectedSearchTerm = this.searchTerm;
    this.selectedTweetCount = Number(this.tweetCount);
    this.selectedResultType = this.resultType;    
  }
}
