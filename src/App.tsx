import './styles/global.css';

import { useRef, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';

import SearchComponent from './SearchComponent/SearchComponent';
import CardList from './CardList/CardList';
import Pagination from './Pagination/Pagination';

function App() {
  const [globalSearchTerm, setGlobalSearchTerm] = useState(
    localStorage.getItem('starTrek_searchTerm') || ''
  );
  const [, setSearchParams] = useSearchParams();
  const detailedCardRef = useRef<HTMLDivElement>(null);

  const closeOutlet = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log('closeOutlet called');
    if (
      detailedCardRef.current &&
      !detailedCardRef.current.contains(event.target as Node)
    ) {
      console.log('Closing details');
      setSearchParams((params) => {
        params.delete('details');
        // return params;
        return new URLSearchParams(params);
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
        <Pagination />
      </main>
      <footer>
        <button>Trigger ErrorBoundary</button>
      </footer>
    </div>
  );
}

export default App;
