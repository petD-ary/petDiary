import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  /* const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken');

  const loginConditions =
    request.nextUrl.pathname.startsWith('/login') ||
    request.nextUrl.pathname.includes('/account');

  const url = request.nextUrl.clone();

  if (loginConditions) {
    if (accessToken) {
      url.pathname = '/';
      return NextResponse.redirect(url.pathname);
    }
  } else {
    // if (!accessToken) {
    //   url.pathname = '/login';
    //   return NextResponse.redirect(url.pathname);
    // }
    return NextResponse.next();
  } */
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|assets).*)'],
};
