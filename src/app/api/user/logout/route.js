'use server'
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST() {
  
  cookies().delete('LigaUser Cookie')

  return NextResponse.json(
    {
      message: 'Sesión Cerrada'
    },
    {
      status: 200,
    })
}