import MainLayout from '../components/layouts/MainLayout';

function App() {
  return (
    <div>
      <MainLayout />
      <footer>
        <button>Trigger ErrorBoundary</button>
      </footer>
    </div>
  );
}

export default App;
