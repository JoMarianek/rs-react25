import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import SearchComponent from './SearchComponent/SearchComponent';
import CardList from './CardList/CardList';
import Pagination from './Pagination/Pagination';
import ToggleThemeButton from './ToggleTheme/ToggleThemeButton';

const MainComponent = () => {
  const [globalSearchTerm, setGlobalSearchTerm] = useState(
    localStorage.getItem('starTrek_searchTerm') || ''
  );

  return (
    <>
      <header>
        <SearchComponent onSearch={setGlobalSearchTerm} />
        <ToggleThemeButton />
      </header>
      <main>
        <div className="mainContainer">
          <CardList searchTerm={globalSearchTerm} />
          <Outlet />
        </div>
        <Pagination />
      </main>
    </>
  );
};

export default MainComponent;
