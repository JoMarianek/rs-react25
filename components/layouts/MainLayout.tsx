import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import SearchComponent from '../SearchComponent/SearchComponent';
import CardList from '../CardList/CardList';
import Pagination from '../Pagination/Pagination';
import ToggleThemeButton from '../ToggleTheme/ToggleThemeButton';
import { useLocalStorage } from 'hooks/useLocalStorage';

const MainLayout = () => {
  const [globalSearchTerm, setGlobalSearchTerm] = useState('');

  useLocalStorage(setGlobalSearchTerm);

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

export default MainLayout;
