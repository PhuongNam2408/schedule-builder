import { Redis } from "@upstash/redis";

let redisClient: Redis | null = null;

export function getRedis(): Redis {
  if (redisClient) {
    return redisClient;
  }

  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    // Upstash KV (từ Vercel Marketplace)
    redisClient = new Redis({
      url: process.env.KV_REST_API_URL,
      token: process.env.KV_REST_API_TOKEN,
    });
  } else if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    // Upstash Redis trực tiếp
    redisClient = Redis.fromEnv();
  } else if (process.env.REDIS_URL) {
    // Fallback cho development với Redis Cloud - tạo mock client
    console.warn("Using Redis Cloud in development - limited functionality");
    redisClient = {
      lpush: async () => { console.log("Mock Redis lpush"); return 1; },
      ltrim: async () => { console.log("Mock Redis ltrim"); return "OK" as const; },
      lrange: async () => { console.log("Mock Redis lrange"); return []; },
      del: async () => { console.log("Mock Redis del"); return 1; },
      set: async () => { console.log("Mock Redis set"); return "OK" as const; },
      get: async () => { console.log("Mock Redis get"); return null; },
    } as unknown as Redis;
  } else {
    // For build time, return a mock that won't be executed
    console.warn("No Redis configuration found, using build-time mock");
    redisClient = {
      lpush: async () => 1,
      ltrim: async () => "OK" as const,
      lrange: async () => [],
      del: async () => 1,
      set: async () => "OK" as const,
      get: async () => null,
    } as unknown as Redis;
  }

  return redisClient;
}

// Export redis as a getter function to avoid initialization during module load
export const redis = {
  get lpush() { return getRedis().lpush.bind(getRedis()); },
  get ltrim() { return getRedis().ltrim.bind(getRedis()); },
  get lrange() { return getRedis().lrange.bind(getRedis()); },
  get del() { return getRedis().del.bind(getRedis()); },
  get set() { return getRedis().set.bind(getRedis()); },
  get get() { return getRedis().get.bind(getRedis()); },
};
