import { Location } from '../locattion/model';
import { User, UserCollection } from '../user/model';

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

interface PhotoExif {
  make: string;
  model: string;
  name: string;
  exposure_time: string;
  aperture: string;
  focal_length: string;
  iso: number;
}

interface PhotoTag {
  title: string;
}

export interface PhotoId {
  id: string;
}

export interface Photo extends PhotoId {
  slug: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  downloads: number;
  likes: number;
  liked_by_user: boolean;
  public_domain: boolean;
  description: string;
  alt_description: string;
  exif: PhotoExif;
  location?: Location;
  tags: PhotoTag[];
  user: User;
  current_user_collections: UserCollection[];
  urls: PhotoUrls;
  links: PhotoLinks;
  views: number;
}

export interface Photos {
  photos: Photo[];
}
