import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function DELETE() {
  try {
    // Xóa tất cả dữ liệu schedules
    await db.schedule.deleteMany();
    
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
    // Xóa tất cả schedules
    await db.schedule.deleteMany();
    
    return NextResponse.json({ success: true, message: "All schedules cleared" }, { status: 200 });
  } catch (error) {
    console.error("Error clearing schedules:", error);
    return NextResponse.json(
      { error: "Failed to clear schedules" },
      { status: 500 }
    );
  }
}
