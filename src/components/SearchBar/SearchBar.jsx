import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Search,
  SearchButton,
  SearchLabel,
  SearchInput,
  SearchForm,
} from './SearchBar.styled';
class SearchBar extends Component {
  state = {
    inputValue: '',
  };
  handleChange = evt => {
    this.setState({
      inputValue: evt.currentTarget.value.toLowerCase().trim(),
    });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    const { inputValue } = this.state;
    if (this.state.inputValue.trim() === '') {
      return;
    }
    this.props.onSubmit(inputValue);
    this.setState({
      inputValue: '',
    });
  };
  render() {
    const { inputValue } = this.state;
    return (
      <Search className="searchbar">
        <SearchForm className="form" onSubmit={this.handleSubmit}>
          <SearchButton type="submit" className="button">
            <SearchLabel className="button-label">Search</SearchLabel>
          </SearchButton>

          <SearchInput
            onChange={this.handleChange}
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
}
export default SearchBar;
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
