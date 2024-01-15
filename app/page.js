'use client';

import {Suspense} from 'react';
import {Short} from './short';
import {Long} from './long';

export default function Home() {
  return (
    <>
      <div>
        <Suspense fallback={<div>Loading short...</div>}>
          <Short />
        </Suspense>
      </div>
      <div>
        <Suspense fallback={<div>Loading long...</div>}>
          <Long />
        </Suspense>
      </div>
    </>
  );
}
