import { Redis } from "@upstash/redis";

let redisClient: Redis | null = null;

export function getRedis(): Redis {
  if (redisClient) {
    return redisClient;
  }

  // Kiểm tra các URL có hợp lệ không (không phải placeholder)
  const hasValidKV = process.env.KV_REST_API_URL && 
                     process.env.KV_REST_API_TOKEN && 
                     process.env.KV_REST_API_URL.startsWith('https://');
  
  const hasValidUpstash = process.env.UPSTASH_REDIS_REST_URL && 
                          process.env.UPSTASH_REDIS_REST_TOKEN &&
                          process.env.UPSTASH_REDIS_REST_URL.startsWith('https://');

  if (hasValidKV) {
    // Upstash KV (từ Vercel Marketplace)
    redisClient = new Redis({
      url: process.env.KV_REST_API_URL,
      token: process.env.KV_REST_API_TOKEN,
    });
  } else if (hasValidUpstash) {
    // Upstash Redis trực tiếp
    redisClient = Redis.fromEnv();
  } else if (process.env.REDIS_URL && process.env.REDIS_URL.startsWith('redis://')) {
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
    // For development without Redis - use mock
    console.warn("No valid Redis configuration found, using local mock for development");
    redisClient = {
      lpush: async () => { console.log("Local Mock Redis lpush"); return 1; },
      ltrim: async () => { console.log("Local Mock Redis ltrim"); return "OK" as const; },
      lrange: async () => { console.log("Local Mock Redis lrange"); return []; },
      del: async () => { console.log("Local Mock Redis del"); return 1; },
      set: async () => { console.log("Local Mock Redis set"); return "OK" as const; },
      get: async () => { console.log("Local Mock Redis get"); return null; },
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
