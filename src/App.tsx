import './styles/global.css';

import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import SearchComponent from './SearchComponent/SearchComponent';
import CardList from './CardList/CardList';
import Pagination from './Pagination/Pagination';

function App() {
  const [globalSearchTerm, setGlobalSearchTerm] = useState(
    localStorage.getItem('starTrek_searchTerm') || ''
  );

  return (
    <div>
      <header>
        <SearchComponent onSearch={setGlobalSearchTerm} />
      </header>
      <main>
        <div className="mainContainer">
          <CardList searchTerm={globalSearchTerm} />
          <Outlet />
        </div>
        <Pagination />
      </main>
      <footer>
        <button>Trigger ErrorBoundary</button>
      </footer>
    </div>
  );
}

export default App;
