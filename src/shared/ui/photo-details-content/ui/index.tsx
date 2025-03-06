import { SkeletonParagraph } from '@/shared/ui/skeleton-paragraph/ui';
import { PhotoDetailsMetrics } from '@/widgets/photo-details/metrics/ui';
import { PhotoDetailsTopics } from '@/widgets/photo-details/topics/ui';
import { Link } from 'react-router';
import { LinkifyText } from '../../linkify-text/ui';
import { PhotoDetailsContentProps } from '../model';

export const PhotoDetailsContent = ({
  title,
  description,
  topics,
  metrics,
  user,
  detailsUrl,
}: PhotoDetailsContentProps) => (
  <div className="flex flex-col h-full p-6 gap-6">
    <div className="flex-1 space-y-6 overflow-auto no-scrollbar break-words">
      {title ? (
        <h2 className="max-w-50 mx-auto break-words uppercase">{title}</h2>
      ) : (
        <div className="skeleton-decoration skeleton-h2 w-48 mx-auto" />
      )}
      {description ? (
        <LinkifyText className="text-justify" text={description} />
      ) : (
        <SkeletonParagraph />
      )}
      <PhotoDetailsTopics topics={topics} />
      <PhotoDetailsMetrics metrics={metrics} />
      {user ? (
        <Link
          className="font-medium text-focus"
          to={user.links.html}
          target="_blank"
        >
          @{user.username}
        </Link>
      ) : (
        <div className="skeleton-decoration w-48 h-4 rounded" />
      )}
    </div>
    {detailsUrl ? (
      <Link
        to={detailsUrl}
        target="_blank"
        className="w-full py-2.5 text-center rounded-lg button-secondary ripple"
      >
        WATCH FULL
      </Link>
    ) : (
      <div className="skeleton-decoration w-full h-12 rounded-lg" />
    )}
  </div>
);
