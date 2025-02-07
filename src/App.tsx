import './styles/global.css';

import { useState } from 'react';
import SearchComponent from './SearchComponent/SearchComponent';
import CardList from './CardList/CardList';

function App() {
  const [globalSearchTerm, setGlobalSearchTerm] = useState(
    localStorage.getItem('starTrek_searchTerm') || ''
  );

  return (
    <>
      <header>
        <SearchComponent onSearch={setGlobalSearchTerm} />
      </header>
      <main>
        <CardList searchTerm={globalSearchTerm} />
      </main>
      <footer>
        <button>Trigger ErrorBoundary</button>
      </footer>
    </>
  );
}

export default App;
