import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export async function GET() {
  try {
    console.log("Testing Redis connection...");
    
    // Test simple ping hoặc set/get
    await redis.set("test_key", "Hello Redis!");
    const result = await redis.get("test_key");
    
    return NextResponse.json({ 
      success: true, 
      message: "Redis connection successful",
      test_result: result 
    });
  } catch (error) {
    console.error("Redis test failed:", error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : "Unknown error" 
      },
      { status: 500 }
    );
  }
}
