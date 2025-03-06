import { Entity } from '.';

export interface UserBasic extends Entity {
  bio?: string;
  first_name: string;
  instagram_username?: string;
  last_name?: string;
  links: {
    followers: string;
    following: string;
    html: string;
    likes: string;
    photos: string;
    portfolio: string;
    self: string;
  };
  location?: string;
  name: string;
  portfolio_url?: string;
  profile_image: {
    small: string;
    medium: string;
    large: string;
  };
  total_collections: number;
  total_likes: number;
  total_photos: number;
  twitter_username?: string;
  updated_at: string;
  username: string;
}
