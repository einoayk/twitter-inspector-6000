import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { TweetsSearchComponent } from './components/tweets-search/tweets-search.component';
import { TweetsComponent } from './components/tweets/tweets.component';
import { TweetComponent } from './components/tweet/tweet.component';


@NgModule({
  declarations: [
    AppComponent,    
    UserComponent,
    ToolbarComponent,
    SearchFormComponent,
    UserSearchComponent,    
    TweetsSearchComponent, TweetsComponent, TweetComponent, 
  ],
  imports: [
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
