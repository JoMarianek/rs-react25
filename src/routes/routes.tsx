import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import DetailedCard from '../CardList/DetailedCard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{ path: '', element: <DetailedCard /> }],
  },
]);

export default router;
