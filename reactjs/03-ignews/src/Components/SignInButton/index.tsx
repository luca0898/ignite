import styles from "./styles.module.scss"
import { FiX } from "react-icons/fi"
import { FaGithub } from "react-icons/fa"
import { signIn, signOut, useSession } from 'next-auth/client'

export function SignInButton() {
    const [ session ] = useSession();

    return session ? (
        <button
            type="button"
            className={styles.signInButton}
            onClick={() => signOut()}
        >
            <FaGithub color="#04D361" />
            {session.user?.name}
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button
            type="button"
            className={styles.signInButton}
            onClick={() => signIn('github')}
        >
            <FaGithub color="#EBA417" />
            SignIn with Github
        </button>
    )
}