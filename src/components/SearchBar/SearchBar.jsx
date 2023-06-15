import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Search,
  SearchButton,
  SearchLabel,
  SearchInput,
  SearchForm,
} from './SearchBar.styled';
function SearchBar({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');
  const handleChange = evt => {
    setInputValue(evt.currentTarget.value.toLowerCase().trim());
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    if (inputValue.trim() === '') {
      return;
    }
    onSubmit(inputValue);
    setInputValue('');
  };
  return (
    <Search className="searchbar">
      <SearchForm className="form" onSubmit={handleSubmit}>
        <SearchButton type="submit" className="button">
          <SearchLabel className="button-label">Search</SearchLabel>
        </SearchButton>

        <SearchInput
          onChange={handleChange}
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
        />
      </SearchForm>
    </Search>
  );
}
export default SearchBar;
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
