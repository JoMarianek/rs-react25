import './styles/global.css';

import MainComponent from './MainComponent';

function App() {
  return (
    <div>
      <MainComponent />
      <footer>
        <button>Trigger ErrorBoundary</button>
      </footer>
    </div>
  );
}

export default App;
