import styles from './SearchComponent.module.css';

interface SearchComponentProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchComponent = ({
  searchTerm,
  setSearchTerm,
}: SearchComponentProps) => {
  return (
    <>
      <form className={styles.searchForm}>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          name="searchInput"
          aria-label="Search"
        ></input>
      </form>
    </>
  );
};

export default SearchComponent;
