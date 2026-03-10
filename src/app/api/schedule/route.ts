import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    
    // Save single schedule
    const record = await db.schedule.create({
      data: {
        date: data.date || new Date().toISOString().split('T')[0],
        lunchId: data.lunch?.id || "",
        lunchName: data.lunch?.name || "",
        lunchAddress: data.lunch?.address || "",
        lunchImage: data.lunch?.image,
        lunchTiktok: data.lunch?.tiktokUrl,
        cafeId: data.cafe?.id || "",
        cafeName: data.cafe?.name || "",
        cafeAddress: data.cafe?.address || "",
        cafeImage: data.cafe?.image,
        cafeTiktok: data.cafe?.tiktokUrl,
        photoboothId: data.photobooth?.id || "",
        photoboothName: data.photobooth?.name || "",
        photoboothAddress: data.photobooth?.address || "",
        photoboothImage: data.photobooth?.image,
        photoboothTiktok: data.photobooth?.tiktokUrl,
        restaurantId: data.restaurant?.id || "",
        restaurantName: data.restaurant?.name || "",
        restaurantAddress: data.restaurant?.address || "",
        restaurantImage: data.restaurant?.image,
        restaurantTiktok: data.restaurant?.tiktokUrl,
      },
    });
    
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
    const schedules = await db.schedule.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    
    return NextResponse.json({ schedules });
  } catch (error) {
    console.error("Error fetching schedules:", error);
    return NextResponse.json(
      { error: "Failed to fetch schedules" },
      { status: 500 }
    );
  }
}
