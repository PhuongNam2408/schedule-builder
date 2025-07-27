import { NextResponse } from 'next/server';
import { redis } from '@/lib/redis';

export async function POST(request: Request) {
  try {
    const { type, name } = await request.json();
    
    if (!type || !name) {
      return NextResponse.json(
        { error: 'Type and name are required' },
        { status: 400 }
      );
    }

    // Tạo key theo loại venue
    const key = `custom_venues:${type}`;
    
    // Tạo venue object
    const customVenue = {
      id: `custom-${Date.now()}`,
      name: name.trim(),
      type,
      createdAt: new Date().toISOString()
    };

    // Lưu vào Redis list
    await redis.lpush(key, JSON.stringify(customVenue));
    
    // Giữ tối đa 100 custom venues mỗi loại
    await redis.ltrim(key, 0, 99);

    return NextResponse.json({ success: true, venue: customVenue });
  } catch (error) {
    console.error('Error saving custom venue:', error);
    return NextResponse.json(
      { error: 'Failed to save custom venue' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    
    if (!type) {
      return NextResponse.json(
        { error: 'Type parameter is required' },
        { status: 400 }
      );
    }

    const key = `custom_venues:${type}`;
    const venues = await redis.lrange(key, 0, -1);
    
    const parsedVenues = venues.map(venue => JSON.parse(venue));
    
    return NextResponse.json({ venues: parsedVenues });
  } catch (error) {
    console.error('Error fetching custom venues:', error);
    return NextResponse.json(
      { error: 'Failed to fetch custom venues' },
      { status: 500 }
    );
  }
}
