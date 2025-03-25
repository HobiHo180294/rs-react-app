import { ReactNode } from 'react';

export type Nullable<T> = T | null;

export type SetterFn<T> = (value: T | ((prev: T) => T)) => void;

export interface Children {
  children?: ReactNode;
}

export interface GalleryData {
  collectionName: string;
}

export interface PhotoDetailsContext {
  photoSlug: string;
  setPhotoSlug: (slug: string) => void;
}
