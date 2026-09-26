import { NextResponse } from 'next/server';
import { getSiteContent, saveSiteContent, CMS_FIELDS } from '@/lib/cms';

export async function GET() {
  try {
    const content = await getSiteContent();
    return NextResponse.json({ 
      success: true, 
      content,
      fields: CMS_FIELDS
    });
  } catch (error) {
    console.error('Failed to fetch site_content:', error);
    return NextResponse.json({ success: false, error: 'Failed to load content' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const items: Record<string, string> = await req.json();

    if (!items || typeof items !== 'object') {
      return NextResponse.json({ success: false, error: 'Invalid content payload' }, { status: 400 });
    }

    await saveSiteContent(items);

    return NextResponse.json({ success: true, message: 'Content updated and published successfully' });
  } catch (error) {
    console.error('Failed to update site_content:', error);
    return NextResponse.json({ success: false, error: 'Database update failed' }, { status: 500 });
  }
}
