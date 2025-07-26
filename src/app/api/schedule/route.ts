import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { nanoid } from "nanoid";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    
    // If saving entire schedules array
    if (data.schedules) {
      // Clear existing schedules
      await redis.del("schedules");
      
      // Save each schedule
      for (const schedule of data.schedules) {
        await redis.lpush("schedules", JSON.stringify(schedule));
      }
      
      return NextResponse.json({ success: true, count: data.schedules.length }, { status: 200 });
    }
    
    // Legacy: saving single schedule
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
    const items = await redis.lrange("schedules", 0, -1);
    
    // Xử lý dữ liệu từ Redis - có thể là string hoặc object
    const schedules = items.map(item => {
      if (typeof item === 'string') {
        try {
          return JSON.parse(item);
        } catch (e) {
          console.error("Error parsing item:", item, e);
          return null;
        }
      } else if (typeof item === 'object' && item !== null) {
        // Dữ liệu đã là object, trả về trực tiếp
        return item;
      } else {
        console.error("Unexpected item type:", typeof item, item);
        return null;
      }
    }).filter(item => item !== null); // Loại bỏ các item lỗi
    
    return NextResponse.json({ schedules });
  } catch (error) {
    console.error("Error fetching schedules:", error);
    return NextResponse.json(
      { error: "Failed to fetch schedules" },
      { status: 500 }
    );
  }
}
