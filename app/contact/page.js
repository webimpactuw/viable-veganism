"use client";
import Image from "next/image";
import greenEdge from '../../public/green-edge.png';
import greenEdge2 from '../../public/greenEdge.png';
import Link from "next/link";
import emailjs from '@emailjs/browser';
import React, { useRef, useState} from 'react';
import styles from "./nav.module.css"

export default function Home() {
  const emailPattern = new RegExp(/b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}b/);
  const form = useRef();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    let email = document.getElementById("email").value;
    if (emailPattern.test(email) || email.length == 0){
      alert("Failed! invalid email address!");
      console.log("invalid email", email);
      return; // Exit early if email is invalid
    } else if (isChecked) {
    emailjs
    .sendForm('service_5nqh7do', 'template_imdbvck', form.current, {
                publicKey: 'nj1Mx2evXp2A2C8pH',
            })
    .then(
        () => {
            alert("Success! You are now enrolled in our mailing list!");
            console.log('SUCCESS!');
            console.log("valid email", email);
            e.target.reset();
        },
        (error) => {
            alert("Failed");
            console.log('FAILED...', error.text);
        },
    );
    } else {
      emailjs
    .sendForm('service_5nqh7do', 'template_c8r8utk', form.current, {
                publicKey: 'nj1Mx2evXp2A2C8pH',
            })
    .then(
        () => {
            alert("Thank you for contacting us! We will reach back to you soon!");
            console.log('SUCCESS!');
            console.log("valid email", email);
            e.target.reset();
        },
        (error) => {
            alert("Failed");
            console.log('FAILED...', error.text);
        },
    );
    }
  };

  return (
    <body className="bg-pinkContact -mb-24  font-Roboto">
      <header className={`${styles.main} ${styles.header}`}>
            <nav class="flex flex-row justify-between w-11/12">
                <section class="flex flex-row items-center gap-3">
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

                <section class="flex flex-row items-center
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
    <div className="bg-greenContact static h-5/6 text-center pb-36" >
    <div className="relative left-24 top-16 z-2 w-60"><Image src="/leaf4.png" width={200}
              height={100}  alt="green-edge"></Image></div>
      <div className="relative top-481 font-medium text-5xl pt-32 pb-2">GET IN TOUCH</div>
      <div className="flex justify-center pb-4"><Image src="/leaf.png" alt="Leaf Logo"
              width={200}
              height={100}></Image></div>
      <p className="font-normal text-lg">For questions or feedback fill out the form below</p>
      <p className="font-normal text-lg pb-4">and we&apos;ll get back to you as soon as possible.</p>
      <p className="text-emerald-800 font-normal text-lg">Feel free to join us on Tuesdays  6:30 - 7:30 PM</p>
      <p className="text-emerald-800 font-normal text-lg">Savery Hall 139</p>
      <div className="flex">
      <div className="relative left-3/4 z-2"><Image className="relative left-2" src="/leaf2.png" width={250}
              height={125}  alt="green-edge" ></Image></div>
      <div className="relative right-24 top-24 z-2 w-64"><Image src="/leaf3.png" width={150}
              height={80}  alt="green-edge" ></Image></div>
      </div>


    </div>
    <div className="relative -top-24"><Image src={greenEdge} alt="green-edge"></Image></div>
    <div className="static">
      <div className="absolute">
      <Image className="relative -top-64 left-96" src="/Petals2.png" width={500} height={500} alt="picture"></Image>
      <div className="relative left-64"><Image className="relative left-96" src="/Petals1.png" width={500} height={500} alt="picture"></Image></div></div>
    <div className="relative -top-56 font-medium text-5xl pt-32 pb-2 text-center">LET&apos;S CHAT</div>
    <div className="flex relative -top-44 left-24 w-11/12">
      <div className="flex h-4/6"></div>
        <form className="flex flex-col gap-3 relative left-40" ref={form} onSubmit={sendEmail}>
          <div className="flex flex-row gap-3">
          <div className="pb-4">
            <p className="pl-4 pb-2">First Name</p>
            <input className="border-2 border-gray-400 pl-4 py-1 rounded-2xl text-lg" id="first-name" type="First_name" name="First_name" placeholder="Type Name"/>
            </div>
            <div>
            <p className="pl-4 pb-2">Last Name</p>
            <input className="border-2 border-gray-400 pl-4 py-1 rounded-2xl text-lg" id="last-name" type="Last_name" name="Last_name" placeholder="Type Name"/>
            </div>
          </div>
          <div className="pb-4">
          <p className="pl-4 pb-2">Email</p>
          <input className="border-2 border-gray-400 px-4 py-1 rounded-2xl text-lg" size="42" id="email" type="email" name="user_email" placeholder="Type Email Address"/>
          </div>
          <div className="text-left pb-4">
            <p className="pl-4 pb-2">Message</p>
            <textarea className="border-2 border-gray-400 px-4 py-1 rounded-2xl text-lg " rows="10" cols="41"id="message" type="message" name="message" placeholder="Type Message"/>
          </div>
          <div>
            <input className="border-2 border-gray-400 rounded-3xl" type="checkbox" id="mail" name="mail" value="mail" checked={isChecked} onChange={handleCheckboxChange}/>
            <label className="pl-2" for="mail">Join our mailing list</label><br></br>
          </div>
          <button className="px-6 py-2 font-semibold bg-greenButton text-white rounded-2xl shadow-sm opacity-100 text-lg" type="submit">Send Message</button>
        </form>
        <div><Image className="relative left-44" src="/circle2.png" width={500} height={500} alt="picture"></Image>
        <div className="relative -top-64 left-64"><Image className="relative -top-60 left-2" src="/pic2.png" width={330} height={330} alt="picture"></Image></div></div>
        <div className="relative "><div className="relative top-56 -left-4 z-10"><Image className="relative top-2 left-1" src="/pic1.png" width={200} height={200} alt="picture"></Image></div>
        <div className="relative top-4 -left-20"><Image className="relative -left-2" src="/circle1.png" width={350} height={350} alt="picture" priority></Image></div></div>
    </div>
    </div>



    <div className="relative -top-64"><Image src={greenEdge2} alt="green-edge"></Image></div>
    <div className="bg-greenContact relative h-svh -top-96 text-center">
      <div className="bg-greenContact pb-40">
      <div className="relative pt-24 left-24 top-18 z-2 w-64"><Image src="/leaf4.png" width={200}
              height={100}  alt="green-edge"></Image></div>
      <div className="relative left-3/4 z-2 w-60 rotate-12"><Image className="relative left-2" src="/leaf2.png" width={250}
              height={125}  alt="green-edge"></Image></div>
      <div className="relative -top-48">
        <div className="font-medium text-5xl pb-4">PLANT-BASED OPTIONS AT UW REQUEST</div>
        <div className="font-medium text-5xl pb-8">FORM</div>
          <p className="font-normal text-lg">Hello! Thank you for participating in this survey! We hope this information will guide our efforts to make plant-</p>
          <p className="font-normal text-lg">based options more accessible at UW. If you have any questions or would like to reach out, feel free to message us</p>
          <p className="font-normal text-lg">at viableveganismuw@uw.edu, or follow our Instagram: @viableveganismuw.</p>
          <button className="relative top-16 px-6 py-4 font-semibold bg-greenButton text-white rounded-3xl shadow-sm opacity-100 text-lg">
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSelec9zr1bjpC6iyzTupyM5GS4oQ6EhmRq6nmc7yVkjcjl3Xg/viewform" target="_blank">Go To Form</Link>
          </button>
        </div>
        <div className="flex relative -top-24">
          <div className="relative top-12 left-3/4 z-2 w-60"><Image className="relative left-12" src="/leaf5.png" width={150}
                height={80}  alt="green-edge" priority></Image></div>
          <div className="relative -top-12 right-24 z-2 w-64"><Image src="/leaf6.png" width={250}
                height={125}  alt="green-edge" priority></Image></div>
        </div>
      </div>
    </div>
    </body>
  );

}