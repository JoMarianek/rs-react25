import './styles/global.css';

import { Component } from 'react';
import SearchComponent from './SearchComponent/SearchComponent';
import CardList from './CardList/CardList';

class App extends Component {
  state = { searchTerm: localStorage.getItem('searchTerm') || '' };

  handleSearch = (term: string) => {
    this.setState({ searchTerm: term });
  };

  render() {
    return (
      <>
        <header>
          <SearchComponent onSearch={this.handleSearch} />
        </header>
        <main>
          <CardList searchTerm={this.state.searchTerm} />
        </main>
        <footer>
          <button>Trigger ErrorBoundary</button>
        </footer>
      </>
    );
  }
}

export default App;
