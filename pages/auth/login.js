import { useRouter } from "next/router";
import confetti from "https://cdn.skypack.dev/canvas-confetti";
import { useEffect } from "react";

export default function LoginPage() {
  const { query } = useRouter();

  useEffect(() => {
    Array.from({ length: 1 }).forEach(confetti);
  }, []);
  return (
    <>
      <div className="container">
        <header>Login to your account</header>
        <form method="POST" action="/api/login">
          <label>
            Username:
            <input name="username" type="text" placeholder="Username" />
          </label>
          <label>
            Password:
            <input name="password" type="password" placeholder="Password" />
          </label>
          <input hidden name="nextUrl" type="text" value={query.next} />
          <button type="submit">Submit</button>
        </form>
      </div>

      <style jsx>
        {`
          .container {
            display: grid;
            place-content: center;
            height: 100vh;
            gap: 20px;
          }
          header {
            font-size: 1.3rem;
          }

          label {
            display: grid;
            gap: 10px;
          }

          form {
            padding: 20px;
            display: grid;
            gap: 20px;
          }
        `}
      </style>
    </>
  );
}
