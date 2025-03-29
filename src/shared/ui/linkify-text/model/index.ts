import { HTMLAttributes } from 'react';

export interface LinkifyTextProps extends HTMLAttributes<HTMLParagraphElement> {
  text: string;
}
