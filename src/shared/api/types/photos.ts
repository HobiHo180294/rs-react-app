import { Entity } from '.';
import { CollectionsBasic } from './collections';
import { UserBasic } from './user';

export interface PhotoMinimal extends Entity {
  slug: string;
  created_at: string;
  updated_at: string;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    thumb: string;
  };
}

interface ExifAndLocation {
  exif: {
    make?: string;
    model?: string;
    exposure_time?: string;
    aperture?: string;
    focal_length?: string;
    iso?: number;
  };
  location: {
    city?: string;
    country?: string;
    /** full string representation of the location, including `city` and `country` if they exist. */
    name?: string;
    position: {
      latitude?: number;
      longitude?: number;
    };
  };
}

export interface PhotoBasic extends PhotoMinimal {
  alt_description?: string;
  blur_hash?: string;
  color?: string;
  description?: string;
  height: number;
  likes: number;
  views: number;
  downloads: number;
  tags?: {
    title: string;
  }[];
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  promoted_at?: string;
  width: number;
  user: UserBasic;
}

type RelatedCollectionsType =
  // Ambiguously related collections
  | 'related'
  // Collections the photo belongs to
  | 'collected';

export interface PhotoFull extends PhotoBasic, ExifAndLocation {
  related_collections: {
    type: RelatedCollectionsType;
    results: CollectionsBasic[];
    total: number;
  };
}
