import { cn } from '@/shared/utils';
import { FormEvent, useRef } from 'react';
import { SearchBarProps } from '../model';

export const SearchBar = ({ inputProps, onSearch }: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (inputRef.current) {
      inputRef.current.value = inputRef.current.value.trim();
      onSearch(inputRef.current.value);
    }
  };

  return (
    <form onSubmit={handleSearch} className="max-w-75 w-full">
      <fieldset className="flex">
        <input
          aria-label="Explore Gallery"
          ref={inputRef}
          className={cn(
            'bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl',
            inputProps.className
          )}
          type="text"
          placeholder="Nature, Birds, Cats, Shoes,..."
          autoFocus
          {...inputProps}
        />
        <button
          className="button-primary py-2.5 max-w-20 w-full rounded-tr rounded-br ripple"
          type="submit"
        >
          Search
        </button>
      </fieldset>
    </form>
  );
};
