import { NextRequest, NextResponse } from "next/server";
import { auth } from "./config/firebase";

const protectedPaths = ["/profile"]

export default async function Middleware(req: NextRequest) {
  try {
    const { pathname } = req.nextUrl
    const isProtected = protectedPaths.some(p => p.startsWith(pathname))
    if(isProtected) {
      const token = await auth.currentUser?.getIdToken()
      if(token) {
        return NextResponse.redirect(new URL("/auth", req.url))
      }
    }

    return NextResponse.next()
  } catch (error) {
    console.error(error);
  }
}