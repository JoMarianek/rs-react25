import { useState } from 'react';
import styles from './SearchComponent.module.css';

interface SearchComponentProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchComponent = ({
  searchTerm,
  setSearchTerm,
}: SearchComponentProps) => {
  const handleSubmit = (event) => {
    setSearchTerm(event.target.text.toLowerCase());
  };

  const filterCards = () => {
    const filteredData = data.filter((item.name.common).toLowerCase().includes(searchTerm) )
  }

  return (
    <>
      <form className={styles.searchForm}>
        <input placeholder="Search..." aria-label="Search"></input>
        <button onClick={handleSubmit} type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchComponent;
