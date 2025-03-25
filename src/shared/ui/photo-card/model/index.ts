import { ImgHTMLAttributes } from 'react';

export interface PhotoCardProps {
  data?: {
    imageProps: ImgHTMLAttributes<HTMLImageElement>;
    title: string;
    description: string;
  };
}
