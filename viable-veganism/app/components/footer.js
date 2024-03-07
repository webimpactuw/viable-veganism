import Link from "next/link"
import styles from "./nav.module.css"

export default function Footer() {
    return (
        <footer className={`${styles.main} ${styles.footer}`}>
            <nav class="flex flex-row justify-between w-5/6 items-center">
                <section>
                    <div>
                        Follow us
                    </div>
                    <div class="flex flex-row gap-2 mt-1 items-center">
                        <Link href={"https://www.instagram.com/viableveganismuw/"}>
                            <img src="ig-icon.png"/>
                        </Link>
                        <Link href={"https://huskylink.washington.edu/organization/viableveganismuw"}>
                            <img src="mail-icon.png"/>
                        </Link>

                    </div>
                </section>
                <section class="flex flex-col gap-3">
                    <div class="flex items-center justify-center">
                        <img src="vegan-logo.png" class="max-w-12 max-h-12"/>
                    </div>
                    <div class="flex flex-row gap-6">
                        <Link href="/home">
                            Home
                        </Link>
                        <Link href="/about">
                            About us
                        </Link>
                        <Link href="/resources">
                            Resources
                        </Link>
                        <Link href="/contact">
                            Contact us
                        </Link>
                    </div>
                </section>
                <section class="flex flex-col gap-2">
                    <div>
                        Join our mailing list
                    </div>
                    <div class="flex flex-row gap-3">
                        <input className={styles["email-input"]} type="text" placeholder="Your email" />
                        <button className={styles["email-submit-button"]}>
                            JOIN
                        </button>
                    </div>
                </section>
            </nav>

        </footer>
    )
}