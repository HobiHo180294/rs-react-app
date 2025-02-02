import { Photo } from '@/entities/Photo/model';
import { Component } from 'react';

interface Props {
  photo: Photo;
  isLoading?: boolean;
}

export class PhotoCard extends Component<Props> {
  render() {
    const { photo, isLoading } = this.props;

    return (
      <article className="flex flex-col gap-4 w-full rounded-lg overflow-hidden shadow-md">
        <div
          className={`${isLoading ? 'bg-neutral-200 h-72 w-full animate-pulse' : ''}`}
        >
          {isLoading ? null : (
            <img
              src={photo.urls.small}
              alt={photo.alt_description}
              className="w-full h-72 object-cover"
            />
          )}
        </div>
        <div className="py-2 px-4 flex flex-col gap-2">
          {isLoading ? (
            <div className="h-4 w-1/2 bg-neutral-200 animate-pulse mx-auto" />
          ) : (
            <h2 className="break-words">{photo.description || 'Untitled'}</h2>
          )}
          <div>
            {isLoading ? (
              <>
                <div className="h-4 w-full bg-neutral-200 animate-pulse" />
                <div className="h-4 w-full bg-neutral-200 animate-pulse" />
              </>
            ) : (
              <p className="text-lg text-justify leading-relaxed text-neutral-600 first-letter:uppercase">
                {photo.alt_description || 'No description available'}
              </p>
            )}
          </div>
        </div>
      </article>
    );
  }
}
