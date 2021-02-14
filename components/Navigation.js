import Link from "next/link";

export const Navigation = () => {
  return (
    <nav>
      <ul className="nav" >
        <li>
          <Link href="/">
            <a> Home Page</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a> About Page</a>
          </Link>
        </li>
        <li>
          <Link href="/contactus">
            <a>
              {" "}
              <b>Contact Us</b>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
