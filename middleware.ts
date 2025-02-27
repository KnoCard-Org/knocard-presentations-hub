import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Add your authentication logic here
  // This is a basic example - implement proper authentication in production

  if (request.nextUrl.pathname.startsWith("/presentation")) {
    // Check if user is authenticated
    const isAuthenticated = request.cookies.get("authenticated")

    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/product-overview", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/presentation/:path*",
}

