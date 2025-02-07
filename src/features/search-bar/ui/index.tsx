import { FormEvent, useRef } from 'react';
import { SearchBarProps } from '../model';

export const SearchBar = ({ defaultValue, onSearch }: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (inputRef.current) {
      inputRef.current.value = inputRef.current.value.trim();
      onSearch(inputRef.current.value);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex w-75">
      <input
        className="bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl"
        ref={inputRef}
        type="text"
        defaultValue={defaultValue}
        placeholder="Nature, Birds, Cats, Shoes,..."
        autoFocus
      />
      <button className="button-primary" type="submit">
        Search
      </button>
    </form>
  );
};
