/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div sx={{ backgroundColor: "primary", color: "#fff", p: 4 }}>tomato</div>
      <header className="header">
        <nav className="nav">
          <Link href="/">
            <a>Uses</a>
          </Link>
          {` `}
          <Link href="/about">
            <a>About</a>
          </Link>
        </nav>
      </header>
    </>
  );
}
