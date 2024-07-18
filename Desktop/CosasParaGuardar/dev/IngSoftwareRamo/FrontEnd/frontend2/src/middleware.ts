import { NextResponse, type NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  console.log("Token:", token);

  if (!token) {
    console.log("No token found, redirecting to login");
    return NextResponse.redirect("http://localhost:3000/login");
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    console.log("JWT Secret:", secret);

    if (!secret) {
      console.log("JWT Secret not found, redirecting to login");
      return NextResponse.redirect("http://localhost:3000/login");
    }

    const { payload } = await jwtVerify(token.value, secret);
    console.log("Valid Token:", payload);
    return NextResponse.next();
  } catch (err) {
    console.log("Token verification failed:", err);
    return NextResponse.redirect("http://localhost:3000/login");
  }
}

export const config = {
  matcher: "/protected/:path*",
};
