import { ReactNode } from 'react';

type CardPropsElement = 'div' | 'article';

export interface CardProps {
  renderImage: () => ReactNode;
  renderTitle: () => ReactNode;
  renderDescription: () => ReactNode;
  as?: CardPropsElement;
}
