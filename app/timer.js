// generates a promise that resolves after the given time
export function createTimerPromise(time, message) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(message);
    }, time);
  });
}
