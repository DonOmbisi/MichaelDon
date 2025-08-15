import { lazy, Suspense } from 'react';
import { Loader } from '~/components/loader';

// Lazy load the Earth component
const Earth = lazy(() => import('./earth'));

export function EarthLazy(props) {
  return (
    <Suspense fallback={<Loader />}>
      <Earth {...props} />
    </Suspense>
  );
}
