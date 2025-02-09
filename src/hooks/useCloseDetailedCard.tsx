import { useSearchParams } from 'react-router-dom';

export const useCloseDetailedCard = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClose = () => {
    if (!searchParams.has('details')) return;
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete('details');
    setSearchParams(newSearchParams);
  };

  return handleClose;
};
