import { NextResponse } from "next/server";

import { parse } from "cookie";
import * as crypto from "crypto";

const ADMIN_HASHED_PASSWORD = crypto
  .createHash("md5")
  .update(
    JSON.stringify({
      username: "admin",
      passsword: "password",
    }),
  )
  .digest("hex");

export function middleware(req) {
  const AUTH_URL = req.nextUrl ? `/auth/login?next=${req.nextUrl}` : "/login";

  try {
    const { auth__token } = parse(req.headers.get("cookie"));

    if (!auth__token || auth__token !== ADMIN_HASHED_PASSWORD) {
      return NextResponse.redirect(AUTH_URL);
    }
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(AUTH_URL);
  }
}
