"use client";
import Link from "next/link"
import styles from "./nav.module.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Footer() {
  const emailPattern = new RegExp(/b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}b/);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    let email = document.getElementById("email").value;
    if (emailPattern.test(email) || email.length == 0){
      alert("Failed, invalid email");
      console.log("invalid email", email);
      return; // Exit early if email is invalid
    }

    emailjs
    .sendForm('service_5nqh7do', 'template_imdbvck', form.current, {
                publicKey: 'nj1Mx2evXp2A2C8pH',
            })
    .then(
        () => {
            alert("SUCCESS");
            console.log('SUCCESS!');
            console.log("valid email", email);
            e.target.reset();
        },
        (error) => {
            alert("Failed");
            console.log('FAILED...', error.text);
        },
    );
  };

    return (
        <footer className={`${styles.main} ${styles.footer}`}>
            <nav className="flex flex-row justify-between w-5/6 items-center">
                <section>
                    <div>
                        Follow us
                    </div>
                    <div clasName="flex flex-row gap-2 mt-1 items-center">
                        <Link href={"https://www.instagram.com/viableveganismuw/"}>
                            <img src="ig-icon.png"/>
                        </Link>
                        <Link href={"https://huskylink.washington.edu/organization/viableveganismuw"}>
                            <img src="mail-icon.png"/>
                        </Link>

                    </div>
                </section>
                <section className="flex flex-col gap-3">
                    <div className="flex items-center justify-center">
                        <img src="vegan-logo.png" className="max-w-12 max-h-12"/>
                    </div>
                    <div className="flex flex-row gap-6">
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
                <section className="flex flex-col gap-2">
                    <div>
                        Join our mailing list
                    </div>
                    <form className="flex flex-row gap-3" ref={form} onSubmit={sendEmail}>
                      <input className={styles["email-input"]} id="email" type="email" name="user_email" placeholder="Your email"/>
                      <input className={styles["email-submit-button"]} type="submit" value="Join" />
                    </form>
                </section>
            </nav>

        </footer>
    )
}