// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { serialize } from "https://cdn.skypack.dev/cookie";

export default (req, res) => {
  return res
    .writeHead(302, {
      Location: "/auth/login",
      "Set-Cookie": serialize("auth__token", "", {
        path: "/",
      }),
    })
    .end();
};
