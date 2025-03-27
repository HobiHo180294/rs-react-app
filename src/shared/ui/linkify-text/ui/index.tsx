import { LOCAL_STORAGE_KEYS } from '@/shared/constants';
import { useLocalStorage } from '@/shared/hooks';
import { cn } from '@/shared/utils';
import { Link } from 'react-router';
import { LinkifyTextProps } from '../model';

export const LinkifyText = ({ text, ...rest }: LinkifyTextProps) => {
  const [visitedLinks, setVisitedLinks] = useLocalStorage<string[]>(
    LOCAL_STORAGE_KEYS.VISITED_LINKS,
    []
  );

  const urlRegExp = /(\b(?:https?:\/\/|www\.)[^\s]+)/g;

  return (
    <p {...rest}>
      {text.split(urlRegExp).map((part) => {
        if (!part.match(urlRegExp)) return part;

        const isVisited = visitedLinks.includes(part);

        return (
          <Link
            key={part}
            to={part.startsWith('www.') ? `https://${part}` : part}
            target="_blank"
            rel="noopener noreferrer"
            className={cn('text-md text-blue-500 underline focused-text', {
              'text-purple-600': isVisited,
            })}
            onClick={() => {
              if (!isVisited) setVisitedLinks((prev) => [...prev, part]);
            }}
          >
            {part}
          </Link>
        );
      })}
    </p>
  );
};
