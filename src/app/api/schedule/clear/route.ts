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

export async function POST() {
  try {
    // Xóa tất cả schedules từ Redis database chung
    await redis.del("schedules");
    
    return NextResponse.json({ success: true, message: "All schedules cleared" }, { status: 200 });
  } catch (error) {
    console.error("Error clearing schedules:", error);
    return NextResponse.json(
      { error: "Failed to clear schedules" },
      { status: 500 }
    );
  }
}
