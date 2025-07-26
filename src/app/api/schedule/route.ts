import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { nanoid } from "nanoid";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const record = {
      id: nanoid(8),
      ...data,
      createdAt: Date.now()
    };
    
    // Thêm lịch trình mới vào đầu danh sách
    await redis.lpush("schedules", JSON.stringify(record));
    
    // Giữ chỉ 50 lịch trình gần nhất để tiết kiệm storage
    await redis.ltrim("schedules", 0, 49);
    
    return NextResponse.json(record, { status: 201 });
  } catch (error) {
    console.error("Error saving schedule:", error);
    return NextResponse.json(
      { error: "Failed to save schedule" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const items = await redis.lrange<string>("schedules", 0, -1);
    const schedules = items.map(item => JSON.parse(item));
    return NextResponse.json(schedules);
  } catch (error) {
    console.error("Error fetching schedules:", error);
    return NextResponse.json(
      { error: "Failed to fetch schedules" },
      { status: 500 }
    );
  }
}
