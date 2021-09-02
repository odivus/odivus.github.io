import { useEffect } from 'react';

export function useScrollUp() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}