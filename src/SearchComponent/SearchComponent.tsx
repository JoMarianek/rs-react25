import { Component } from 'react';
import styles from './SearchComponent.module.css';

class SearchComponent extends Component<{ onSearch: (term: string) => void }> {
  state = { searchTerm: '' };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSearch = () => {
    this.props.onSearch(this.state.searchTerm.trim());
  };

  render() {
    return (
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search..."
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSearch} className={styles.button}>
          Search
        </button>
      </div>
    );
  }
}

export default SearchComponent;
