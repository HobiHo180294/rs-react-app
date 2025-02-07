import { Card } from '@/entities/card/ui';

export const PhotoCardLoader = () => (
  <Card
    as="div"
    renderImage={() => (
      <div className="bg-neutral-200 h-72 w-full animate-pulse" />
    )}
    renderTitle={() => (
      <div className="h-4 w-1/2 bg-neutral-200 animate-pulse mx-auto" />
    )}
    renderDescription={() => (
      <div>
        <div className="h-4 w-full bg-neutral-200 animate-pulse" />
        <div className="h-4 w-full bg-neutral-200 animate-pulse" />
      </div>
    )}
  />
);
