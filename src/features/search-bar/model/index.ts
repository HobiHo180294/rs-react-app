import { InputHTMLAttributes } from 'react';

export interface SearchBarProps {
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  onSearch: (query: string) => void;
}
