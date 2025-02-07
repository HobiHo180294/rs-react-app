import { ERRORS } from '@/shared/constants';
import { ErrorMessageProps } from '../model';

export const ErrorMessage = ({
  error,
  helperText = ERRORS.UNKNOWN,
}: ErrorMessageProps) => (
  <div className="bg-red-50 border border-red-500 text-red-900 px-4 py-3">
    <div className="font-bold">{helperText}</div>
    <pre className="text-sm">{error}</pre>
  </div>
);
