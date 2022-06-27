import { useSession, signIn, signOut } from "next-auth/react"
import styles from "../styles/login-btn.module.css"

export default function LoginBtn() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <button className={styles.Button} onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      <button oclassName={styles.Button} onClick={() => signIn()}>Sign in</button>
    </>
  )
}