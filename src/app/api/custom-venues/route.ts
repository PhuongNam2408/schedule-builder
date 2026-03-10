import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { type, name } = await request.json();
    
    if (!type || !name) {
      return NextResponse.json(
        { error: 'Type and name are required' },
        { status: 400 }
      );
    }

    // Tạo custom venue
    const customVenue = await db.customVenue.create({
      data: {
        type,
        name: name.trim(),
      },
    });

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

    const venues = await db.customVenue.findMany({
      where: {
        type,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    
    return NextResponse.json({ venues });
  } catch (error) {
    console.error('Error fetching custom venues:', error);
    return NextResponse.json(
      { error: 'Failed to fetch custom venues' },
      { status: 500 }
    );
  }
}
