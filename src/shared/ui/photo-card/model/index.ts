import { ImgHTMLAttributes } from 'react';

export interface PhotoCardProps {
  imageProps?: ImgHTMLAttributes<HTMLImageElement>;
  title?: string;
  description?: string;
}
