import { Location } from '../locattion/model';

interface UserProfileImage {
  small: string;
  medium: string;
  large: string;
}

interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
}

export interface UserCollection {
  id: number;
  title: string;
  published_at: string;
  last_collected_at: string;
  updated_at: string;
  cover_photo?: string;
  user?: User;
}

export interface User {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  portfolio_url: string;
  bio: string;
  location?: Location;
  total_likes: number;
  total_photos: number;
  total_collections: number;
  links: UserLinks;
  first_name?: string;
  last_name?: string;
  instagram_username?: string;
  twitter_username?: string;
  profile_image?: UserProfileImage;
}
