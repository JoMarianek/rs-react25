import './styles/global.css';
import CardList from './components/CardList';
import SearchComponent from './components/SearchComponent';

function App() {
  return (
    <>
      <nav>
        <SearchComponent />
      </nav>
      <CardList />
    </>
  );
}

export default App;
