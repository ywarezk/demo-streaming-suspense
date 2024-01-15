import {createTimerPromise} from './timer';
import {use} from 'react';

// promise that resolves after 2 seconds
let shortQuery = createTimerPromise(2000, 'short query');

export function Short() {
  const short = use(shortQuery);
  return <div>{short}</div>;
}
