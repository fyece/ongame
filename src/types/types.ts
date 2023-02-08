export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  // rating: number;
  // rating_top: number;
  // ratings: {};
  // ratings_count: number;
  // reviews_text_count: string;
  // added: number;
  // added_by_status: {};
  // metacritic: number;
  // playtime: number;
  // suggestions_count: number;
  // updated: "2number23-number2-number7T18:3number:number1Z";
  // esrb_rating: {},

  platforms: {
    platform: Platform;
    released_at: string;
  }[];
}

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

export interface GameInfo {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  metacritic: number;
  metacritic_platforms: {
    metascore: number;
    url: string;
  }[];
  released: string;
  tba: boolean;
  updated: string;
  background_image: string;
  background_image_additional: string;
  website: string;
  rating: number;
  rating_top: number;
  // ratings: {};
  // reactions: {};
  added: number;
  // added_by_status: {};
  playtime: number;
  screenshots_count: number;
  movies_count: number;
  creators_count: number;
  achievements_count: number;
  parent_achievements_count: string;
  reddit_url: string;
  reddit_name: string;
  reddit_description: string;
  reddit_logo: string;
  reddit_count: number;
  twitch_count: string;
  youtube_count: string;
  reviews_text_count: string;
  ratings_count: number;
  suggestions_count: number;
  alternative_names: string[];
  metacritic_url: string;
  parents_count: number;
  additions_count: number;
  game_series_count: number;
  esrb_rating: {
    id: number;
    slug: string;
    name: string;
  };
  platforms: {
    platform: {
      id: number;
      slug: string;
      name: string;
    };
    released_at: string;
    // requirements: {};
  }[];
  developers: {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
  }[];
  stores: WhereToBuy[];
}

export interface WhereToBuy {
  id: number;
  url: string;
  store: Store;
}

export interface Store {
  id: number;
  name: string;
  slug: string;
  domain: string;
  games_count: number;
  image_background: string;
}
