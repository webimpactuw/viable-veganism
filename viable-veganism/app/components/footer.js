import Link from "next/link"
import styles from "./footer.module.css"

export default function Footer() {
    return (
        <nav className={styles.main}>
            <section>
                <div>
                    Follow us
                </div>
                <div class="flex flex-row gap-2 mt-1">
                    <Link href={"https://www.instagram.com/viableveganismuw/"}>
                        <img src="ig-icon.png" />
                    </Link>
                    <Link href={"https://huskylink.washington.edu/organization/viableveganismuw"}>
                        <img src="mail-icon.png" />
                    </Link>

                </div>
            </section>
            <section class="flex flex-col gap-3">
                <div class="flex items-center justify-center">
                    <img src="vegan-logo.png" />
                </div>
                <div class="flex flex-row gap-6">
                    <div>
                        Home
                    </div>
                    <div>
                        About us
                    </div>
                    <div>
                        Resources
                    </div>
                    <div>
                        Contact us
                    </div>
                </div>
            </section>
            <section class="flex flex-col gap-2">
                <div>
                    Join our mailing list
                </div>
                <div class="flex flex-row gap-3">
                    <input className={styles["email-input"]} type="text" placeholder="Your email"/>
                    <button className={styles["email-submit-button"]}>
                        JOIN
                    </button>
                </div>
            </section>
        </nav>
    )
}