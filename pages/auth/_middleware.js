import { NextResponse } from "next/server";

import { parse } from "https://cdn.skypack.dev/cookie";

import * as crypto from "crypto";

const ADMIN_HASHED_PASSWORD = crypto
  .createHash("md5")
  .update(
    JSON.stringify({
      username: "admin",
      passsword: "password",
    })
  )
  .digest("hex");

export function middleware(req, event) {
  try {
    const { auth__token } = parse(req.headers.get("cookie"));

    if (auth__token === ADMIN_HASHED_PASSWORD)
      return NextResponse.redirect("/");

    return NextResponse.next();
  } catch (error) {
    return NextResponse.next();
  }
}
