import Image from "next/image";
import Link from "next/link";
import meet from "../../public/meet.png";
import bg from "../../public/meet_bg.png";

export default function Home() {
  return (
    <body className="h-dvh">
      <div className="relative z-10"><Image src={meet} alt="background"></Image></div>
      <div className="relative text-center z-20 -top-96">
        <div className="relative font-medium text-5xl pt-32 pb-2 -top-96">MEET THE TEAM</div>
        <div className="relative flex justify-center -top-96"><Image src="/leaf.png" alt="Leaf Logo"
                width={200}
                height={100}></Image></div>
        <p className="relative font-normal text-xl -top-96">Explore more about the vegan world with us</p>
      </div>

      <div className="relative z-0 -top-96"><Image src={bg} alt="background"></Image></div>
    </body>

  );
}