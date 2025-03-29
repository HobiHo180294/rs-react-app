import { ERRORS } from '@/shared/constants';
import { cn } from '@/shared/utils';
import { ErrorMessageProps } from '../model';

export const ErrorMessage = ({
  errorText,
  helperText = ERRORS.UNKNOWN,
  className,
  ...rest
}: ErrorMessageProps) => (
  <div
    className={cn(
      'bg-red-50 border border-red-500 text-red-900 px-4 py-3',
      className
    )}
    {...rest}
  >
    <div className="font-bold">{helperText}</div>
    <pre className="text-sm">{errorText}</pre>
  </div>
);
