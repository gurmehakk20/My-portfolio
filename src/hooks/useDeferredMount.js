import { useEffect, useState } from 'react';

const INTERACTION_EVENTS = ['pointermove', 'pointerdown', 'touchstart', 'keydown', 'wheel', 'scroll'];

/**
 * Returns true on the visitor's first interaction, or `fallbackDelay` ms after the page has loaded
 * (once the main thread is idle) — whichever comes first. Used to keep heavy, decorative work
 * such as the hero's WebGL scene out of the initial page load.
 */
const useDeferredMount = (fallbackDelay = 3500) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (ready) return undefined;

    let timerId;
    let idleId;
    const activate = () => setReady(true);
    const listenerOptions = { once: true, passive: true };

    INTERACTION_EVENTS.forEach((type) => window.addEventListener(type, activate, listenerOptions));

    const scheduleFallback = () => {
      timerId = window.setTimeout(() => {
        if ('requestIdleCallback' in window) idleId = window.requestIdleCallback(activate, { timeout: 2000 });
        else activate();
      }, fallbackDelay);
    };

    if (document.readyState === 'complete') scheduleFallback();
    else window.addEventListener('load', scheduleFallback, { once: true });

    return () => {
      INTERACTION_EVENTS.forEach((type) => window.removeEventListener(type, activate, listenerOptions));
      window.removeEventListener('load', scheduleFallback);
      window.clearTimeout(timerId);
      if (idleId && 'cancelIdleCallback' in window) window.cancelIdleCallback(idleId);
    };
  }, [ready, fallbackDelay]);

  return ready;
};

export default useDeferredMount;
