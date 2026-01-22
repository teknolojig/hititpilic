import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    return NextResponse.next()
  },
  {
    pages: {
      signIn: "/admin/login",
    },
    callbacks: {
      authorized: ({ req, token }) => {
        // /admin/login sayfasına herkes erişebilir
        if (req.nextUrl.pathname === "/admin/login") {
          return true
        }
        // Diğer admin sayfalarına sadece token varsa erişilebilir
        if (req.nextUrl.pathname.startsWith("/admin")) {
          return !!token
        }
        return true
      }
    }
  }
)

export const config = {
  matcher: ["/admin/:path*"]
}