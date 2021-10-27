import { useRouter } from "next/router";

export default function SingleBlogPage() {
  const { query } = useRouter();

  return (
    <>
      <div>
        <header>
          This is just a basic blog <strong>{query.slug}</strong>
        </header>
        <form method="GET" action="/api/logout">
          <button type="submit">Logout</button>
        </form>
      </div>
      <style jsx>{`
        div {
          display: grid;
          gap: 50px;
        }
        header {
          font-size: 2rem;
          text-align: center;
        }

        form {
          display: grid;
          place-content: center;
        }

        button {
          /* Reset Button Styles */
          background: transparent;
          border: 0px;
          cursor: pointer;

          font-size: 1.5rem;
          border: 2px solid indigo;
          padding: 4px 16px;
          border-radius: 16px;
        }
      `}</style>
    </>
  );
}
