// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as crypto from "crypto";

import { serialize } from "cookie";

function getAuthEndpoint(nextUrl = "") {
  return Boolean(nextUrl) ? `/auth/login?next=${nextUrl}` : "/auth/login";
}

export default (req, res) => {
  if (req.method === "POST") {
    const { username, password, nextUrl } = req.body;

    if (username === "admin" && password === "password") {
      const naiveHashedPassword = crypto
        .createHash("md5")
        .update(
          JSON.stringify({
            username: "admin",
            passsword: "password",
          }),
        )
        .digest("hex");

      return res
        .writeHead(302, {
          Location: Boolean(nextUrl) ? nextUrl : "/",
          "Set-Cookie": serialize("auth__token", naiveHashedPassword, {
            path: "/",
          }),
        })
        .end();
    } else {
      return res
        .writeHead(302, {
          Location: getAuthEndpoint(nextUrl),
        })
        .end();
    }
  }

  return res
    .writeHead(302, {
      Location: getAuthEndpoint(),
    })
    .end();
};
