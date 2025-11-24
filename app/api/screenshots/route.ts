import { readdir } from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const dir = path.join(process.cwd(), 'public', 'screenshots');
  try {
    const files = await readdir(dir);
    const images = files.filter(f => /\.(png|jpg|jpeg|webp)$/i.test(f)).sort();
    const urls = images.map(f => `/screenshots/${f}`);
    return NextResponse.json({ images: urls });
  } catch (err) {
    return NextResponse.json({ images: [] });
  }
}
