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
  description_raw: string;
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
  genres: Genre[];
  tags: Tag[];
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

<<<<<<< HEAD
export interface Genre {
=======
export interface Developer {
>>>>>>> origin/0902-work
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

<<<<<<< HEAD
export interface Tag {
  id: number;
  name: string;
  slug: string;
  language: string;
  games_count: number;
  image_background: string;
=======
export interface GameListParams {
  page?: number;
  page_size?: number;
  search?: string;
  search_precise?: boolean;
  search_exact?: boolean;
  parent_platforms?: string;
  platforms?: string;
  stores?: string;
  developers?: string;
  publishers?: string;
  genres?: string;
  tags?: string;
  creators?: string;
  dates?: string;
  updated?: string;
  platforms_count?: number;
  metacritic?: string;
  exclude_collection?: number;
  exclude_additions?: boolean;
  exclude_parents?: boolean;
  exclude_game_series?: boolean;
  exclude_stores?: string;
  orderin?: string;
>>>>>>> origin/0902-work
}
