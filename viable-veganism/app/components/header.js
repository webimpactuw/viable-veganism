import Link from "next/link"
import styles from "./nav.module.css"

export default function Header() {
    return (
        <header className={`${styles.main} ${styles.header}`}>
            <nav className="flex flex-row justify-between w-11/12">
                <section className="flex flex-row items-center gap-3">
                    <img src="vegan-logo.png" class="max-w-14 max-h-14"/>
                    <div className={styles["logo-txt"]}>
                        <div >
                            Viable
                        </div>
                        <div >
                            Veganism
                        </div>
                    </div>
                </section>

                <section className="flex flex-row items-center 
                                gap-14 text-lg">
                    <Link href="/home" className={styles["home-button"]}>
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
                </section>
            </nav>
        </header>
    )
}