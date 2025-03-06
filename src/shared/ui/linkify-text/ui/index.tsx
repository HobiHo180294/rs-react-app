import { Link } from 'react-router';
import { LinkifyTextProps } from '../model';

export const LinkifyText = ({ text, ...rest }: LinkifyTextProps) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  return (
    <p {...rest}>
      {text.split(urlRegex).map((part) => {
        if (!part.match(urlRegex)) return part;

        return (
          <Link
            key={part}
            to={part}
            target="_blank"
            className="text-md text-blue-500 underline visited:text-purple-600 text-focus"
          >
            {part}
          </Link>
        );
      })}
    </p>
  );
};
