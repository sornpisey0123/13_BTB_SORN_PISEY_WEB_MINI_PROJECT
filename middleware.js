import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export default function middleware(request) {

  const token = request.cookies.get("next-auth.session-token")?.value;
  console.log("Token : ", token);
  const path = request.nextUrl.pathname;
  if (!token && path !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if(request.nextUrl.pathname.startWith("/")){
    return NextResponse.redirect(new URL("/login"), request.url);
  }

}

// export const config = { matcher: ["/dashboard"] };
export const config = { matcher: ["/todo-list/:path*", "/todo-board/path*"]};
