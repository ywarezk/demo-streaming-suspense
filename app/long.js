import {createTimerPromise} from './timer';
import {use} from 'react';

// promise that resolves after 5 seconds
let longQuery = createTimerPromise(5000, 'long query');

export function Long() {
  const long = use(longQuery);
  return <div>{long}</div>;
}
