import { Entity } from '.';
import { PhotoBasic, PhotoMinimal } from './photos';
import { UserBasic } from './user';

export interface CollectionsBasic extends Entity {
  cover_photo?: PhotoBasic;
  description?: string;
  featured: boolean;
  /**
   * This is different from `updated_at` because that may also change when a photo inside changes or
   * is deleted.
   */
  last_collected_at: string;
  links: {
    self: string;
    html: string;
    photos: string;
    download?: string;
    related?: string;
  };
  preview_photos?: PhotoMinimal[];
  published_at: string;
  title: string;
  total_photos: number;
  updated_at: string;
  user: UserBasic;
}
