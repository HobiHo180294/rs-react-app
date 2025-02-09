import { Children } from '@/shared/types';
import { PaginationItemProps } from '../model';

const PaginationItem = ({ page, className, ...rest }: PaginationItemProps) => {
  return (
    <li key={page} className="inline">
      <span
        className={`
        relative
        float-left
        px-3
        py-2
        -ml-px
        border
        border-gray-300
        hover:bg-gray-100
        hover:text-green-800
        focus:bg-gray-100
        focus:text-green-800
        ${className}
      `}
        {...rest}
      >
        {page}
      </span>
    </li>
  );
};

export const Pagination = ({ children }: Children) => {
  return <ul className="inline-block pl-0 mt-4 mb-4 rounded">{children}</ul>;
};

Pagination.Item = PaginationItem;
