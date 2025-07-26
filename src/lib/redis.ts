import { Redis } from "@upstash/redis";

// Kết nối Redis với Upstash (hỗ trợ Vercel deployment)
export const redis = (() => {
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    // Upstash KV (từ Vercel Marketplace)
    return new Redis({
      url: process.env.KV_REST_API_URL,
      token: process.env.KV_REST_API_TOKEN,
    });
  } else if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    // Upstash Redis trực tiếp
    return Redis.fromEnv();
  } else if (process.env.REDIS_URL) {
    // Fallback cho development với Redis Cloud - tạo mock client
    console.warn("Using Redis Cloud in development - limited functionality");
    return {
      lpush: async () => { console.log("Mock Redis lpush"); return 1; },
      ltrim: async () => { console.log("Mock Redis ltrim"); return "OK"; },
      lrange: async () => { console.log("Mock Redis lrange"); return []; },
      del: async () => { console.log("Mock Redis del"); return 1; },
    } as any;
  } else {
    throw new Error(
      "No Upstash Redis configuration found. Please set:\n" +
      "- KV_REST_API_URL + KV_REST_API_TOKEN (Upstash KV from Vercel Marketplace)\n" +
      "- UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN (Upstash Redis direct)"
    );
  }
})();
