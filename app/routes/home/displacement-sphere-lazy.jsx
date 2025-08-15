import { lazy, Suspense } from 'react';
import { Loader } from '~/components/loader';

// Lazy load the DisplacementSphere component
const DisplacementSphere = lazy(() => import('./displacement-sphere'));

export function DisplacementSphereLazy(props) {
  return (
    <Suspense fallback={<Loader />}>
      <DisplacementSphere {...props} />
    </Suspense>
  );
}
