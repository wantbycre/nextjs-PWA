import Link from "next/link";

export default () => (
  <div>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/movie">
          <a>Movie</a>
        </Link>
      </li>
    </ul>
  </div>
);
