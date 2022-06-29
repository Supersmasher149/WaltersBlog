import Link from "next/link";
import styles from "../styles/Header.module.css";
import LoginBtn from "./login-btn";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  return (
      <header className={styles.main}>
        <div>
          <h1>Header</h1>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/posts">
                <a>Posts</a>
              </Link>
            </li>
            <li>
              <Link href="/createPost">
                <a>Create Post</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.Login}>
        <LoginBtn />
        </div>
      </header>
  );
};

export default Header;
