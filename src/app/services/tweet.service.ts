import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

import {Twitter, TwitterQuery } from '../types';

const TweetQuery = gql`
  query Tweets($q: String!, $result_type: SearchReponse) {
    twitter {
      search (q: $q, count: 100, result_type: $result_type) {
        id
        created_at
        text
        retweet_count
        user {
          created_at
          description
          id
          screen_name
          name
          profile_image_url
          url
          tweets_count
          followers_count          
        }                
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  twitter: Observable<Twitter>;  
  error: any;  

  constructor(private apollo: Apollo) { }

  public getTweets(searchTerm: string, resultType: string): Observable<Twitter> {        
    return this.apollo.watchQuery<TwitterQuery>({
      query: TweetQuery,
      variables: {
        q: searchTerm,
        result_type: resultType,          
      },
      errorPolicy: 'all'
      })
      .valueChanges
      .pipe(
        map(result => result.data.twitter)        
      )         
  }
}
