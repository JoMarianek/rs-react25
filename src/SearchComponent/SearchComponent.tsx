import { useState } from 'react';
import styles from './SearchComponent.module.css';

interface onSearchProps {
  onSearch: (term: string) => void;
}

const SearchComponent = ({ onSearch }: onSearchProps) => {
  const [localSearchTerm, setLocalSearchTerm] = useState(
    localStorage.getItem('searchTerm') || ''
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    const trimmedSearch = localSearchTerm.trim();
    onSearch(trimmedSearch);

    localStorage.setItem('searchTerm', trimmedSearch);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search..."
        value={localSearchTerm}
        onChange={handleChange}
      />
      <button onClick={handleSearch} className={styles.button}>
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
