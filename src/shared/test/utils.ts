import { UITestElement } from './types';

export const getLoadingElements = (elements: string[]): UITestElement[] =>
  elements.map((text) => ({
    role: 'status',
    name: new RegExp(`loading ${text}`, 'i'),
  }));

export const expectElementPresence = (
  target: HTMLElement | HTMLElement[]
): void =>
  Array.isArray(target)
    ? target.forEach((element) => expect(element).toBeInTheDocument())
    : expect(target).toBeInTheDocument();
