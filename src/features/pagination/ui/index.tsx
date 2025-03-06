import { cn } from '@/shared/utils';
import { HTMLAttributes } from 'react';
import { PaginationItemProps } from '../model';

const PaginationItem = ({
  page,
  className,
  'aria-selected': ariaSelected,
  tabElementProps,
  ...rest
}: PaginationItemProps) => {
  const {
    onClick: onTabClick,
    className: tabClassName,
    disabled,
  } = tabElementProps;

  return (
    <li
      key={page}
      className={cn(
        'w-full',
        {
          'opacity-50 cursor-not-allowed': disabled,
        },
        className
      )}
      aria-current="page"
      aria-disabled={disabled}
      aria-selected={ariaSelected}
      {...rest}
    >
      <button
        className={cn(
          'w-full px-1 py-2 border disabled:pointer-events-none',
          ariaSelected
            ? 'bg-gray-700 text-white border-gray-700'
            : 'border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-800 [&:is(:focus,:active)]:bg-gray-300 [&:is(:focus,:active)]:text-gray-900 [&:is(:focus,:active)]:border-gray-900',
          tabClassName
        )}
        role="tab"
        tabIndex={ariaSelected ? -1 : 0}
        disabled={disabled || !!ariaSelected}
        onClick={(event) => {
          if (onTabClick) {
            event.stopPropagation();
            onTabClick(event);
          }
        }}
      >
        {page}
      </button>
    </li>
  );
};

export const Pagination = ({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLUListElement>) => (
  <ul className={cn('flex py-6 max-w-100 w-full rounded', className)} {...rest}>
    {children}
  </ul>
);

Pagination.Item = PaginationItem;
