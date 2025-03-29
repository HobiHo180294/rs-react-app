import { THREE_ITEMS as LINES } from '@/shared/constants';

export const SkeletonParagraph = () => (
  <div
    className="space-y-2"
    role="status"
    aria-label="Loading content description or text paragraph"
  >
    {LINES.map((_, index) => (
      <div key={index} className="skeleton-decoration skeleton-paragraph" />
    ))}
  </div>
);
