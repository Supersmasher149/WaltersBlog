import Link from "next/link";
import LoginBtn from "./login-btn";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  return (
    <header>
      <div>
        <ul className={"list-none m-0 p-0"}>
          <li className={"inline-block p-2"}>
            <Link href="/">
              <a className={"subpixel-antialiased font-medium text-slate-700"}>
                Home
              </a>
            </Link>
          </li>
          <li className={"inline-block p-2"}>
            <Link href="/about">
              <a className={"subpixel-antialiased font-medium text-slate-700"}>
                About
              </a>
            </Link>
          </li>
          <li className={"inline-block p-2"}>
            <Link href="/posts">
              <a className={"subpixel-antialiased font-medium text-slate-700"}>
                Posts
              </a>
            </Link>
          </li>
          <li className={"inline-block p-2"}>
            <Link href="/createPost">
              <a className={"subpixel-antialiased font-medium text-slate-700"}>
                Create Post
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
