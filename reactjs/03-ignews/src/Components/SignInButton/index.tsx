import styles from "./styles.module.scss"
import { FiX } from "react-icons/fi"
import { FaGithub } from "react-icons/fa"

export function SignInButton() {
    const isUserLoggedIn = true;

    return isUserLoggedIn ? (
        <button
            type="button"
            className={styles.signInButton}
        >
            <FaGithub color="#04D361" />
            Luca Guiraldello
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button
            type="button"
            className={styles.signInButton}
        >
            <FaGithub color="#EBA417" />
            SignIn with Github
        </button>
    )
}