// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
 /**
 * @param {number} millis - Time to sleep in milliseconds
 * @return {Promise<any>} - Resolves after the given time
 */
async function sleep(millis) {
  return new Promise(resolve => setTimeout(resolve, millis));
}

// Example usage:
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // ~100 (minor deviation possible)
});