import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get('refreshToken');
  const status = cookieStore.get('status');

  // 토큰이 있을 경우 로그인 페이지 접근 제한
  if (refreshToken) {
    // 임시 유저가 /account 외의 페이지에 접근했을 시 /account 페이지로 리다이렉션
    if (status?.value === 'temporary' && !request.url.includes('/account')) {
      return NextResponse.redirect(new URL('/account', request.url));
    }
    // 로그인 유저가 /login, /account 페이지 접근 시 홈으로 리다이렉션
    if (
      !status &&
      (request.nextUrl.pathname.startsWith('/login') ||
        request.nextUrl.pathname.startsWith('/account'))
    ) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // 토큰 없이 로그인 페이지 외 페이지 접근 시 로그인으로 이동
  if (!refreshToken) {
    if (
      !request.nextUrl.pathname.startsWith('/login') &&
      !request.nextUrl.pathname.startsWith('/auth')
    ) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|assets).*)'],
};
