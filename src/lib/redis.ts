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
  } else {
    throw new Error(
      "No Upstash Redis configuration found. Please set:\n" +
      "- KV_REST_API_URL + KV_REST_API_TOKEN (Upstash KV from Vercel Marketplace)\n" +
      "- UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN (Upstash Redis direct)"
    );
  }
})();
