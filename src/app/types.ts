export type Twitter = {
  user: TwitterUser;
  tweet: Tweet;
  search: Search;
}

export type TwitterQuery = {
  twitter: Twitter;
}

export type TwitterUser = {
  created_at: string;
  description: string;
  id: string;
  screen_name: string;
  name: string;
  profile_image_url: string;
  url: string;
  tweets_count: number;
  followers_count: number;
  tweets: Tweet[];
}

export type Tweet = {
  id: string;
  created_at: string;
  text: string;
  retweet_count: number;
  user: TwitterUser;
  retweets: Retweet[];
}

export type Retweet = {
  id: string;
  created_at: string;
  in_reply_to_tweet_id: string;
  in_reply_to_user_id: number;
  in_reply_to_screen_name: string;
  retweeted_status: Tweet;
  user: TwitterUser;
}

export type Search = {
  tweets: Tweet[];
}




