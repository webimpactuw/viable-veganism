import React from "react";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
    return (
        <div className="bg-green-700 w-full flex flex-row justify-between items-center p-20">
            <div className="flex flex-row items-center">
                <ul>
                    <p className="text-white text-base pl-1 pb-6">
                        Follow Us
                    </p>
                    <div className="flex gap-6 pb-5">
                        <FaInstagram className="text-white text-2xl cursor-pointer hover:text-yellow-600" />
                        <MdOutlineEmail className="text-white text-2xl cursor-pointer hover:text-blue-600" />
                    </div>
                </ul>
            </div>
            <div className="flex flex-col items-center">
                <img src="viable_veganism_logo.png" alt="Logo" className="h-10 mb-5"/>
                <div className="flex gap-10">
                    <a href="#" className="text-white text-base hover:text-yellow-600">
                        Home
                    </a>
                    <a href="#" className="text-white text-base hover:text-yellow-600">
                        About Us
                    </a>
                    <a href="#" className="text-white text-base hover:text-yellow-600">
                        Resources
                    </a>
                    <a href="#" className="text-white text-base hover:text-yellow-600">
                        Contact Us
                    </a>
                </div>
            </div>
            <div className="flex flex-col">
                <p className="text-white text-base mb-4">Join our mailing list</p>
                <div className="flex">
                    <input type="text" className="border border-white border-opacity-100 bg-transparent p-2 rounded-lg placeholder-white mr-5" placeholder="Enter your email"/>
                    <button className="bg-white text-green-700 px-4 py-2 rounded-lg ml-2 hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300">
                        Join
                    </button>
                </div>
            </div>
        </div>
    );
}
