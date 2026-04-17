import { NextResponse } from 'next/server';
import { getContext } from '@/lib/knowledgeBase';

export async function POST(req: Request) {
  const { message } = await req.json();
  const context = getContext();

  return NextResponse.json({
    reply: "Context: " + context + "\nUser: " + message
  });
}