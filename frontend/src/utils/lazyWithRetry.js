import { lazy } from 'react';

/**
 * Drop-in replacement for React.lazy that survives transient chunk-load
 * failures. Vite code-splits each route into a hashed chunk; a brief network
 * loss — or a redeploy that replaces old hashes while a tab is still open —
 * makes the dynamic import reject with "Failed to fetch dynamically imported
 * module", crashing the route.
 *
 * Strategy: retry the import a few times with backoff. If it still fails
 * (almost always a stale deploy), force ONE hard reload to fetch the new
 * index.html + fresh chunk hashes. A sessionStorage guard prevents reload loops.
 */
export function lazyWithRetry(importFn, retries = 3, interval = 500) {
  return lazy(async () => {
    const RELOAD_KEY = 'chunk-reload-attempt';
    try {
      for (let attempt = 0; ; attempt++) {
        try {
          const mod = await importFn();
          sessionStorage.removeItem(RELOAD_KEY);
          return mod;
        } catch (err) {
          if (attempt >= retries) throw err;
          await new Promise((resolve) => setTimeout(resolve, interval * (attempt + 1)));
        }
      }
    } catch (err) {
      const alreadyReloaded = sessionStorage.getItem(RELOAD_KEY);
      if (!alreadyReloaded) {
        sessionStorage.setItem(RELOAD_KEY, '1');
        window.location.reload();
        // Keep the Suspense fallback up while the page reloads.
        return new Promise(() => {});
      }
      throw err;
    }
  });
}
