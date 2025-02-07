import { User } from '../User/model';

interface PhotoUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

interface PhotoLinks {
  self: string;
  html: string;
  download: string;
}

export interface Photo {
  id: string;
  created_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  likes: number;
  liked_by_user: boolean;
  alt_description: string;
  description: string;
  user: User;
  current_user_collections: unknown[];
  urls: PhotoUrls;
  links: PhotoLinks;
}

export interface Photos {
  photos: Photo[];
}
