'use client'
import Link from "next/link"
import styles from "./nav.module.css"
import HeaderNavLink from "./HeaderNavLink"
import { useState } from "react"

export default function Header() {

    const [selectedLink, setSelectedLink] = useState("/home")

    return (
        <header className={`${styles.main} ${styles.header}`}>
            <nav class="flex flex-row justify-between w-11/12">
                <section class="flex flex-row items-center gap-3">
                    <img src="Seongha/vegan-logo.png" class="max-w-14 max-h-14"/>
                    <div className={styles["logo-txt"]}>
                        <div >
                            Viable
                        </div>
                        <div >
                            Veganism
                        </div>
                    </div>
                </section>

                <section class="flex flex-row items-center
                                gap-14 text-lg">
                    <HeaderNavLink link="./"
                        selectedLink = {selectedLink}
                        setSelectedLink = {setSelectedLink}
                        txt={"Home"}/>

                    <HeaderNavLink link="/about"
                        selectedLink = {selectedLink}
                        setSelectedLink = {setSelectedLink}
                        txt={"About us"}/>

                    <HeaderNavLink link="/resource"
                        selectedLink = {selectedLink}
                        setSelectedLink = {setSelectedLink}
                        txt={"Resources"}/>

                    <HeaderNavLink link="/meal"
                        selectedLink = {selectedLink}
                        setSelectedLink = {setSelectedLink}
                        txt={"Meals"}/>

                    <HeaderNavLink link="/contact"
                        selectedLink = {selectedLink}
                        setSelectedLink = {setSelectedLink}
                        txt={"Contact us"}/>
                </section>
            </nav>
        </header>
    )
}