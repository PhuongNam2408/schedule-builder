import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export async function DELETE() {
  try {
    // Xóa tất cả dữ liệu schedules
    await redis.del("schedules");
    
    return NextResponse.json({ 
      message: "All schedules cleared successfully" 
    });
  } catch (error) {
    console.error("Error clearing schedules:", error);
    return NextResponse.json(
      { error: "Failed to clear schedules" },
      { status: 500 }
    );
  }
}
