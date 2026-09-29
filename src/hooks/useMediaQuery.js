import { useEffect, useState } from 'react';

/** Tracks a CSS media query, e.g. '(prefers-reduced-motion: reduce)' or '(pointer: coarse)'. */
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const onChange = () => setMatches(media.matches);
    onChange();
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [query]);

  return matches;
};

export default useMediaQuery;
