import './styles/global.css';

import { useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';

import SearchComponent from './SearchComponent/SearchComponent';
import CardList from './CardList/CardList';

function App() {
  const [globalSearchTerm, setGlobalSearchTerm] = useState(
    localStorage.getItem('starTrek_searchTerm') || ''
  );
  const [, setSearchParams] = useSearchParams();

  const closeOutlet = (event: React.MouseEvent<HTMLDivElement>) => {
    if (
      detailedCardRef.current &&
      !detailedCardRef.current.contains(event.target as Node)
    ) {
      setSearchParams((params) => {
        params.delete('details');
        return params;
      });
    }
  };

  return (
    <div onClick={closeOutlet}>
      <header>
        <SearchComponent onSearch={setGlobalSearchTerm} />
      </header>
      <main>
        <div className="mainContainer">
          <CardList searchTerm={globalSearchTerm} />
          <Outlet context={{ closeOutlet }} />
        </div>
      </main>
      <footer>
        <button>Trigger ErrorBoundary</button>
      </footer>
    </div>
  );
}

export default App;
