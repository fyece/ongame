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
  // added: 0;
  // added_by_status: {};
  // metacritic: number;
  // playtime: number;
  // suggestions_count: number;
  // updated: "2023-02-07T18:30:01Z";
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
