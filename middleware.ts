import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken');

  const url = request.nextUrl.clone();

  if (!accessToken?.value) {
    if (
      !request.nextUrl.pathname.includes('/login') &&
      !request.nextUrl.pathname.includes('/account')
    ) {
      url.pathname = '/login';
      // return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}

export const config = {
  /* matcher: [
    '/((?!login|account).)*', // 모든 경로 포함
  ], */
};
