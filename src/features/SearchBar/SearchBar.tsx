import { Component, FormEvent, createRef } from 'react';

interface Props {
  defaultValue?: string;
  onSearch: (query: string) => void;
}

export class SearchBar extends Component<Props> {
  private inputRef = createRef<HTMLInputElement>();

  handleSearch = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (this.inputRef.current) {
      const trimmedValue = this.inputRef.current.value.trim();
      this.inputRef.current.value = trimmedValue;
      this.props.onSearch(trimmedValue);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSearch} className="flex w-75">
        <input
          className="bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl"
          ref={this.inputRef}
          type="text"
          defaultValue={this.props.defaultValue}
          placeholder="Nature, Birds, Cats, Shoes,..."
          autoFocus
        />
        <button className="button-primary" type="submit">
          Search
        </button>
      </form>
    );
  }
}
