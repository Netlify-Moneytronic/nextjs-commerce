import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/product')) {
    const slug = request.nextUrl.pathname.split('/')[2]
    const response = NextResponse.next()
    response.cookies.set('last_viewed_product', slug)
    return response
  }
}
