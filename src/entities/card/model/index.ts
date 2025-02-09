import { HTMLAttributes, ReactNode } from 'react';

type CardPropsElement = 'div' | 'article';

export interface CardProps
  extends HTMLAttributes<HTMLDivElement | HTMLElement> {
  renderImage: () => ReactNode;
  renderTitle: () => ReactNode;
  renderDescription: () => ReactNode;
  as?: CardPropsElement;
}
