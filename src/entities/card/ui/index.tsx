import { CardProps } from '../model';

export const Card = ({
  renderImage,
  renderTitle,
  renderDescription,
  as: Component = 'article',
}: CardProps) => (
  <Component className="flex flex-col gap-4 w-full rounded-lg overflow-hidden shadow-md">
    {renderImage()}
    <div className="py-2 px-4 flex flex-col gap-2">
      {renderTitle()}
      {renderDescription()}
    </div>
  </Component>
);
