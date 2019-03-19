import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {Twitter, TwitterQuery } from '../types';

const TwitterUserQuery = gql`
  query TwitterUser($identity: UserIdentity!) {
    twitter {
      user (identifier: name, identity: $identity) {
        created_at
        description
        id
        screen_name
        name
        profile_image_url
        url
        tweets_count
        followers_count
        tweets(limit: 5) {
          text
        }
      }
    }
  }
`;  

@Injectable({
  providedIn: 'root'
})
export class UserService {
  twitter: Observable<Twitter>;  
  error: any;  

  constructor(private apollo: Apollo) { }

  public getAccount(username: string): Observable<Twitter> {            
    return this.apollo.watchQuery<TwitterQuery>({
      query: TwitterUserQuery,
      variables: {
        identity: username          
      },
        errorPolicy: 'all'
      })
      .valueChanges      
      .pipe(
        map(result => result.data.twitter)               
      )        
  }
}  
