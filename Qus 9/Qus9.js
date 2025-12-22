/* Qus :- Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.
         The class has three public methods:
         set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.
         get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.
         count(): returns the count of un-expired keys.
*/
 
class TimeLimitedCache {
  constructor(){
    // Store key -> { value, expiryTime }
    this.cache = new Map();
  }

  /**
   * Set a key-value pair with expiration.
   * @param {number} key - The key (integer).
   * @param {number} value - The value (integer).
   * @param {number} duration - Duration in milliseconds until expiration.
   * @returns {boolean} - True if key already existed and was unexpired, false otherwise.
   */
  set(key, value, duration) {
    const now = Date.now();
    const expiryTime = now + duration;

    const existed = this.cache.has(key) && this.cache.get(key).expiryTime > now;

    // Overwrite value and expiry
    this.cache.set(key, { value, expiryTime });

    return existed;
  }

  /**
   * Get the value for a key if unexpired.
   * @param {number} key - The key to retrieve.
   * @returns {number} - Value if unexpired, otherwise -1.
   */
  get(key) {
    const now = Date.now();
    if (!this.cache.has(key)) return -1;

    const entry = this.cache.get(key);
    if (entry.expiryTime > now) {
      return entry.value;
    } else {
      // Expired → remove it
      this.cache.delete(key);
      return -1;
    }
  }

  /**
   * Count all unexpired keys.
   * @returns {number} - Number of unexpired keys.
   */
  count() {
    const now = Date.now();
    let validCount = 0;

    for (const [key, entry] of this.cache.entries()) {
      if (entry.expiryTime > now) {
        validCount++;
      } else {
        // Clean up expired keys
        this.cache.delete(key);
      }
    }

    return validCount;
  }
}
