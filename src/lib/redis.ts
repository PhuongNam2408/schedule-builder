import { Redis } from "@upstash/redis";

// Hỗ trợ nhiều loại Redis configuration
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
    // Redis Cloud hoặc Redis server khác - cần ioredis
    try {
      const IORedis = require("ioredis").default;
      return new IORedis(process.env.REDIS_URL, {
        maxRetriesPerRequest: 3,
        lazyConnect: true,
      });
    } catch (error) {
      console.error("Failed to initialize ioredis. Install with: npm install ioredis");
      throw error;
    }
  } else {
    throw new Error(
      "No Redis configuration found. Please set one of:\n" +
      "- KV_REST_API_URL + KV_REST_API_TOKEN (Upstash KV)\n" +
      "- UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN (Upstash Redis)\n" +
      "- REDIS_URL (Redis Cloud)"
    );
  }
})();
