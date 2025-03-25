import { cn } from '@/shared/utils';
import { PhotoDetailsTopicsProps } from '../model';

const DUMMY_TOPICS: undefined[] = [...Array(9)];

export const PhotoDetailsTopics = ({ topics }: PhotoDetailsTopicsProps) =>
  Array.isArray(topics) && !topics.length ? null : (
    <div className="space-y-3">
      <h3>Main Topics</h3>
      <ul
        aria-label="Related topics"
        className="flex flex-wrap gap-3 justify-center"
      >
        {(topics || DUMMY_TOPICS).map((topic, index) => (
          <li key={topic?.title || index}>
            <div
              {...(!topic?.title && {
                role: 'status',
                'aria-label': `Loading topic ${index + 1}`,
              })}
              className={cn(
                'rounded-full',
                topic?.title
                  ? 'px-4 py-2 bg-gray-100 break-all overflow-hidden text-center'
                  : 'skeleton-decoration w-20 h-10'
              )}
            >
              {topic?.title || ''}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
