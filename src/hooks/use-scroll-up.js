import { useEffect } from 'react';

export function useScrollUp(hash) {
  useEffect(() => {
    if (hash) return;

    window.scrollTo(0, 0);
  }, [hash]);
}