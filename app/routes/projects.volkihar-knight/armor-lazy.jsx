import { lazy, Suspense } from 'react';
import { Loader } from '~/components/loader';

// Lazy load the Armor component
const Armor = lazy(() => import('./armor'));

export function ArmorLazy(props) {
  return (
    <Suspense fallback={<Loader />}>
      <Armor {...props} />
    </Suspense>
  );
}
