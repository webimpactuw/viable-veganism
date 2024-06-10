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
                        <Link href={"https://www.instagram.com/viableveganismuw/"} target="_blank">
                            <img src="Seongha/ig-icon.png" alt="instagram"/>
                        </Link>
                        <Link href={"https://huskylink.washington.edu/organization/viableveganismuw"} target="_blank">
                            <img src="Seongha/mail-icon.png" alt="email"/>
                        </Link>

                    </div>
                </section>
                <section class="flex flex-col gap-3">
                    <div class="flex items-center justify-center">
                        <img src="Seongha/vegan-logo.png" class="max-w-12 max-h-12" alt="logo"/>
                    </div>
                    <div class="flex flex-row gap-6">
                        <Link href="./">
                            Home
                        </Link>
                        <Link href="/about">
                            About us
                        </Link>
                        <Link href="/resource">
                            Resources
                        </Link>
                        <Link href="/meal">
                            Meals
                        </Link>
                        <Link href="/contact">
                            Contact us
                        </Link>
                    </div>
                </section>
                <section class="flex flex-col gap-2">
                    <div className="size-24">
                    </div>
                </section>
            </nav>

        </footer>
    )
}