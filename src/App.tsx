import { useState } from 'react';

import './styles/global.css';
import CardList from './components/CardList';
import SearchComponent from './components/SearchComponent';
import { CardProps } from './shared/types';

function App() {
  const [data, setData] = useState<CardProps[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <>
      <nav>
        <SearchComponent
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </nav>
      <CardList data={data} setData={setData} searchTerm={searchTerm} />
    </>
  );
}

export default App;
