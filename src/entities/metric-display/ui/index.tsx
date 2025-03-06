import { cn, formatNumber } from '@/shared/utils';
import { MetricDisplayProps } from '../model';

export const MetricDisplay = ({
  quantity,
  children,
  className,
  ...rest
}: MetricDisplayProps) => {
  const isValidQuantity = Number.isFinite(quantity);

  return (
    <div className={cn('inline-flex items-center gap-2', className)} {...rest}>
      {children || <div className="skeleton-decoration w-6 h-6 rounded" />}
      <div
        className={
          isValidQuantity ? '' : 'skeleton-decoration w-12 h-5 rounded'
        }
      >
        {isValidQuantity ? formatNumber(quantity as number) : ''}
      </div>
    </div>
  );
};
