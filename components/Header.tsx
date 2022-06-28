import Link from "next/link";
import styles from "../styles/Header.module.css";
import LoginBtn from "./login-btn"
import { useSession } from "next-auth/react";

const Header = () => {
  const {data: session} = useSession();
  return (
    <header className={styles.main}>
      <h1>Header</h1>
      <LoginBtn />
      <div>{session?.user?.name}</div> 
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
    </header>
  );
};

export default Header;
