import { useEffect, useRef, useState } from 'react';

/**
 * Watches an element against the viewport (expanded by `rootMargin`).
 * - `hasEntered` latches to true the first time it comes near — use it to mount heavy children once.
 * - `isVisible` follows it in and out — use it to pause render loops while offscreen.
 */
const useNearViewport = (rootMargin = '300px') => {
  const ref = useRef(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setHasEntered(true);
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) setHasEntered(true);
      },
      { rootMargin },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, hasEntered, isVisible };
};

export default useNearViewport;
