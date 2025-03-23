// import { useState } from 'react';
import styles from './SearchComponent.module.css';

const SearchComponent = () => {
  // const [searchTerm, setSearchTerm] = useState('');

  // const handleSubmit = (event) => {
  //   setSearchTerm(event.target.text);
  // };

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
