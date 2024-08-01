import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(req, res) {
  const auth = cookies().get('LigaUser Cookie') || ''

  if (!auth) {
    return NextResponse.json(
        {
          message: 'Authentication required'
        },
        {
          status: 401,
        })
  }
  try {
    jwt.verify(auth.value, 'LigaUser Cookie');
    return NextResponse.json(
        {
          message: 'Authenticated'
        },
        {
          status: 200,
        })
  } catch (error) {
    return NextResponse.json(
        {
          message: 'Invalid Token'
        },
        {
          status: 401,
        })
  }
}
