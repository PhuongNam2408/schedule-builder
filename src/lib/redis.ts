import { Redis } from "@upstash/redis";

// Kết nối Redis với biến môi trường từ Vercel
export const redis = Redis.fromEnv();
