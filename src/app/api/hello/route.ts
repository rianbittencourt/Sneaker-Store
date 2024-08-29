import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import sneakers from '../../../data/sneakers.json';

type SneakersData = typeof sneakers;

export async function GET() {
  return NextResponse.json(sneakers);
}
