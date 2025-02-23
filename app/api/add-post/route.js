import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const res = await request.json();

    const { title, content } = res;

    const result = await prisma.post.create({
      data: {
        title,
        content,
        published: true,
        author: {
          create: {
            name: 'afiq sam',
          },
        },
      },
    });

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
