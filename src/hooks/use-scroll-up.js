import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export function useScrollUp(hash) {
  const history = useHistory();

  useEffect(() => {
    if (hash || history.action === 'POP') return;
    window.scrollTo(0, 0);
  }, [hash, history]);
}