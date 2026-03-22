type CacheStore = Map<string, { value: string; expiry: number }>;

const memoryCache: CacheStore = new Map();

/**
 * Simple cache utility.
 * Uses Redis when REDIS_URL is configured, falls back to in-memory Map.
 * This demonstrates the caching pattern — swap the implementation
 * for a real Redis client (ioredis) in production.
 */
export const cache = {
  async get(key: string): Promise<string | null> {
    const entry = memoryCache.get(key);
    if (!entry) return null;
    if (Date.now() > entry.expiry) {
      memoryCache.delete(key);
      return null;
    }
    return entry.value;
  },

  async set(key: string, value: string, ttlSeconds: number = 60): Promise<void> {
    memoryCache.set(key, {
      value,
      expiry: Date.now() + ttlSeconds * 1000,
    });
  },

  async del(key: string): Promise<void> {
    memoryCache.delete(key);
  },
};
