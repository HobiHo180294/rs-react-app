import { HTMLAttributes } from 'react';

export interface ErrorMessageProps extends HTMLAttributes<HTMLDivElement> {
  errorText: string;
  helperText?: string;
}
