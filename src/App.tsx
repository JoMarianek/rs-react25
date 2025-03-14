import './styles/global.css';

import MainComponent from './MainComponent';

const alertError = () => {
  alert('Whoops something went wrong');
};

function App() {
  return (
    <div>
      <MainComponent />
      <footer>
        <button onClick={alertError}>Trigger ErrorBoundary</button>
      </footer>
    </div>
  );
}

export default App;
