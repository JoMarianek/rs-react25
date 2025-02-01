import './styles/global.css';

import { Component } from 'react';
import SearchComponent from './SearchComponent/SearchComponent';
import CardList from './CardList/CardList';

class App extends Component {
  render() {
    return (
      <>
        <header>
          <SearchComponent />
        </header>
        <main>
          <CardList />
        </main>
        <footer>
          <button>Trigger ErrorBoundary</button>
        </footer>
      </>
    );
  }
}

export default App;
