import { ReactNode } from 'react';

export interface PhotoDetailsContentBaseProps {
  renderAbsoluteElements?: () => ReactNode;
  renderTitle: () => ReactNode;
  renderDescription: () => ReactNode;
  renderTopics: () => ReactNode;
  renderStats: () => ReactNode;
  renderUserInfo: () => ReactNode;
  renderMore: () => ReactNode;
}
